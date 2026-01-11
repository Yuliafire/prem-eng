import { NextResponse } from 'next/server';

interface TwinwordQuizResponse {
  quiz: TwinwordQuizQuestion[];
}

interface TwinwordQuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

interface FormattedQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export async function GET() {
  try {
    const response = await fetch(
      'https://api.twinword.com/api/v4/word/quiz/?entry=english&exam=1&level=2',
      {
        headers: { Accept: 'application/json' },
      }
    );
    if (!response.ok) throw new Error('Failed to fetch quiz from Twinword');
    const data: TwinwordQuizResponse = await response.json();

    const questions: FormattedQuestion[] = data.quiz.map(
      (q: TwinwordQuizQuestion) => ({
        question: q.question,
        options: [...q.options, q.answer].sort(() => Math.random() - 0.5),
        correctAnswer: q.answer,
        explanation: q.explanation || 'Good effort! Practice more vocabulary.',
      })
    );

    return NextResponse.json({ questions });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      questions: [
        {
          question: "What is a synonym for 'happy'?",
          options: ['Sad', 'Joyful', 'Angry', 'Tired'],
          correctAnswer: 'Joyful',
          explanation: "Correct! 'Joyful' means very happy.",
        },
        {
          question:
            "Choose the correct past tense: 'She _____ to school yesterday.'",
          options: ['Go', 'Goes', 'Went', 'Going'],
          correctAnswer: 'Went',
          explanation: "Right! 'Went' is the past tense of 'go'.",
        },
      ],
    });
  }
}
