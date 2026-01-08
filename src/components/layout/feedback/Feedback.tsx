import Image, { StaticImageData } from 'next/image';
import certificateImage from '../../../../public/sophia.png';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import ModalButton from '@/components/ui/ModalButton/ModalButton';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

interface StudentFeedback {
  name: string;
  certificate: StaticImageData;
  description: string;
  bio: string[];
  feedback: string[];
}

export default function Feedback() {
  const studentFeedback: StudentFeedback = {
    name: 'София Мерзлая',
    certificate: certificateImage,
    description: 'За 6 месяцев от уровня А2 до уровня B2 + IELTS Сертификат',
    bio: [
      'После 6 месяцев обучения успешно сдала международный экзамен в Турции, благодаря чему смогла поступить в ВУЗ в Шанхае, Китай.',
    ],
    feedback: [
      'Разговорный клуб английского языка помог мне обрести уверенность в говорении.',
      'Уроки Юлии были увлекательными и адаптированными к моему уровню.',
      'Я улучшила свой словарный запас, произношение и грамматику.',
      'Юлия поделилась всеми секретами изучения языка.',
      'Уроки Английского с Юлией навсегда изменили мою жизнь!',
    ],
  };

  return (
    <Card className="max-w-4xl mx-auto border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 md:p-8">
        <CardHeader className="text-center p-0 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            История Успеха
          </h2>
        </CardHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src={studentFeedback.certificate}
                alt="Sofia's English Course Certificate"
                className="rounded-lg border border-border shadow-sm max-w-full h-auto"
                data-testid="certificate-image"
              />
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-2 bg-blue-600 text-white"
              >
                IELTS
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {studentFeedback.name}
              </h3>
              <p className="text-lg text-primary font-semibold">
                {studentFeedback.description}
              </p>
            </div>
            <div className="h-px bg-border"></div>
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Результаты 📈
              </h4>
              <div className="space-y-2">
                {studentFeedback.bio.map((line, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Отзыв студента 💬
              </h4>
              <div className="space-y-3">
                {studentFeedback.feedback.map((feedback, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground leading-relaxed">
                      {feedback}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 p-4 rounded-lg border border-primary/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  Прогресс
                </span>
                <span className="text-sm font-bold text-primary">A2 → B2</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Начало</span>
                <span>6 месяцев</span>
                <span>Результат</span>
              </div>
            </div>
          </div>
        </div>

        <Card className="mt-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0">
                  <AcademicCapIcon className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-foreground font-semibold text-lg mb-1">
                    Хотите таких же результатов?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Присоединяйтесь к 500+ студентам, которые уже заговорили
                    свободно
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <ModalButton>
                  {' '}
                  <RocketLaunchIcon className="h-5 w-5 mr-2" />
                  Начать сейчас
                </ModalButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
