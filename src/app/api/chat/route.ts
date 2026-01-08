import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'nodejs';

const openai = new OpenAI({
  apiKey: 'ollama',
  baseURL: process.env.OLLAMA_BASE_URL ?? 'http://localhost:11434/v1',
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      throw new TypeError('Invalid input: messages must be an array');
    }

    const completion = await openai.chat.completions.create({
      model: process.env.OLLAMA_MODEL ?? 'llama3.1',
      messages: [
        {
          role: 'system',
          content:
            'You are a patient and engaging English teacher. For every user message: Gently correct grammar/vocab, suggest 1-2 new words/phrases, ask a follow-up question. Keep responses under 150 words. If the user speaks another language, explain in simple English.',
        },
        ...messages,
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const assistantResponse =
      completion.choices[0]?.message?.content ??
      'Sorry, I couldn’t process that.';

    return NextResponse.json({
      message: {
        id: Date.now().toString(),
        role: 'assistant',
        content: assistantResponse,
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
