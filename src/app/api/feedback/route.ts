// app/api/feedback/route.ts
import { NextRequest, NextResponse } from 'next/server';

type FeedbackType = 'up' | 'down';

interface FeedbackBody {
  messageId: string;
  feedback: FeedbackType;
  // на будущее: userId?: string; mode?: string; lessonId?: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as FeedbackBody;
  const { messageId, feedback } = body;

  if (!messageId || (feedback !== 'up' && feedback !== 'down')) {
    return NextResponse.json(
      { error: 'Invalid feedback payload' },
      { status: 400 }
    );
  }

  // TODO: заменить на запись в БД / логгер
  console.log('Feedback received', {
    messageId,
    feedback,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
