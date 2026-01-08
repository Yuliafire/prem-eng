'use client';

import { useState } from 'react';
import {
  AcademicCapIcon,
  CheckCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import statueImage from '../../../../public/statue.png';
import Image from 'next/image';
import Link from 'next/link';
import { questions } from '@/data/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import ModalButton from '@/components/ui/ModalButton/ModalButton';

export default function EnglishTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'incorrect' | null;
    message: string;
  }>({ type: null, message: '' });
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentAttempts, setCurrentAttempts] = useState(0);
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;

    const currentQuestionData = questions[currentQuestion];
    const isCorrect =
      selectedAnswer.trim() === currentQuestionData.correctAnswer.trim();

    if (isCorrect) {
      setFeedback({
        type: 'correct',
        message: currentQuestionData.explanation,
      });
      setScore((prev) => prev + 1);
      setCurrentAttempts(0);

      setTimeout(() => {
        setFeedback({ type: null, message: '' });
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        } else {
          setShowResults(true);
        }
      }, 2000);
    } else {
      if (currentAttempts < 1) {
        setFeedback({
          type: 'incorrect',
          message: 'Incorrect. Try again!',
        });
        setCurrentAttempts((prev) => prev + 1);

        setTimeout(() => {
          setFeedback({ type: null, message: '' });
          setSelectedAnswer(null);
        }, 2000);
      } else {
        setFeedback({
          type: 'incorrect',
          message: `Incorrect. The correct answer is "${currentQuestionData.correctAnswer}". ${currentQuestionData.explanation}`,
        });
        setCurrentAttempts(0);

        setTimeout(() => {
          setFeedback({ type: null, message: '' });
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
          } else {
            setShowResults(true);
          }
        }, 3000);
      }
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFeedback({ type: null, message: '' });
    setScore(0);
    setCurrentAttempts(0);
    setShowResults(false);
    setShowAllAnswers(false);
  };

  const percentage = Math.round((score / questions.length) * 100);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <Image
          src={statueImage}
          alt="Statue"
          className="absolute top-0 left-0 w-1/3 h-full object-cover opacity-80"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
            Узнай свой уровень
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
        </div>

        <Card className="w-full shadow-lg">
          <CardContent className="p-6">
            {!showResults ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Прогресс</span>
                    <span>
                      {currentQuestion + 1} / {questions.length}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <AcademicCapIcon className="h-6 w-6 text-primary" />
                  <span className="text-lg font-semibold text-foreground">
                    Вопрос {currentQuestion + 1} из {questions.length}
                  </span>
                </div>

                <h2 className="text-xl text-center font-semibold text-foreground mb-6">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedAnswer === option ? 'default' : 'outline'
                      }
                      onClick={() => setSelectedAnswer(option)}
                      className="w-full justify-start h-auto py-3 px-4 text-left whitespace-normal"
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={handleAnswerSubmit}
                  disabled={!selectedAnswer}
                  className="w-full"
                  size="lg"
                >
                  Проверить ответ
                </Button>

                {feedback.type && (
                  <Card
                    className={`
                    mt-4 border-l-4 ${
                      feedback.type === 'correct'
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                        : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                    }
                  `}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      {feedback.type === 'correct' ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <XMarkIcon className="h-5 w-5 text-red-600 flex-shrink-0" />
                      )}
                      <p
                        className={`
                        text-sm ${
                          feedback.type === 'correct'
                            ? 'text-green-800 dark:text-green-300'
                            : 'text-red-800 dark:text-red-300'
                        }
                      `}
                      >
                        {feedback.message}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Результаты теста
                </h2>

                <Card className="bg-muted/50">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircleIcon
                        className={`
                        h-8 w-8 ${
                          percentage >= 60
                            ? 'text-green-500'
                            : percentage >= 40
                              ? 'text-yellow-500'
                              : 'text-red-500'
                        }
                      `}
                      />
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {score} / {questions.length}
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          {percentage}%
                        </Badge>
                      </div>
                    </div>

                    <p className="text-foreground">
                      {percentage >= 80 && 'Отлично! Продвинутый уровень.'}
                      {percentage >= 60 &&
                        percentage < 80 &&
                        'Хорошо! Средний уровень.'}
                      {percentage >= 40 &&
                        percentage < 60 &&
                        'Продолжайте практику! Начальный уровень.'}
                      {percentage < 40 && 'Начните с основ. У вас получится!'}
                    </p>

                    <Button
                      onClick={() => setShowAllAnswers(!showAllAnswers)}
                      variant="outline"
                      className="w-full"
                    >
                      {showAllAnswers ? 'Скрыть' : 'Показать'} правильные ответы
                    </Button>

                    {showAllAnswers && (
                      <div className="space-y-4 text-left">
                        {questions.map((q, i) => (
                          <Card key={i} className="bg-background">
                            <CardContent className="p-4 space-y-2">
                              <p className="font-semibold text-foreground">
                                {q.question}
                              </p>
                              <p className="text-green-600 dark:text-green-400 text-sm">
                                Правильный ответ: {q.correctAnswer}
                              </p>
                              <p className="text-muted-foreground text-sm">
                                {q.explanation}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}

                    <Button onClick={restartTest} className="w-full" size="lg">
                      Пройти тест заново
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 border-0 shadow-2xl">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-white">
                  Нужна точная диагностика?
                </h3>

                <a
                  href="https://t.me/lingua_voice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  Написать в Telegram
                </a>

                <p className="text-muted-foreground text-sm">
                  Запишитесь на бесплатную консультацию
                </p>
              </div>
              <ModalButton size="lg" className="min-w-[200px]">
                Бесплатная консультация
              </ModalButton>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            ← Назад на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
