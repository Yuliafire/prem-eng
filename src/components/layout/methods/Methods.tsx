import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

import {
  CheckBadgeIcon,
  AcademicCapIcon,
  ClockIcon,
  TrophyIcon,
  GiftIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

interface GridItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Methods() {
  const gridItems: GridItem[] = [
    {
      id: 1,
      title: 'Индивидуальные уроки',
      description: 'Персональный подход и адаптация программы под ваши цели',
      imageSrc: '/undraw_learning.png',
      imageAlt: 'Преподаватель и студент на индивидуальном онлайн-уроке',
    },
    {
      id: 2,
      title: '24/7 практика в чате',
      description: 'Постоянная практика английского с поддержкой преподавателя',
      imageSrc: '/undraw_ai-chat.png',
      imageAlt: 'Онлайн-чат для практики английского',
    },
    {
      id: 3,
      title: 'Разговорный клуб',
      description: 'Практика с единомышленниками в комфортной атмосфере',
      imageSrc: '/undraw_group-chat.png',
      imageAlt: 'Группа людей разговаривает на английском',
    },
    {
      id: 4,
      title: 'Бесплатные материалы',
      description: 'Доступ к библиотеке учебных материалов и ресурсов',
      imageSrc: '/undraw_writing-online.png',
      imageAlt: 'Человек читает книги и материалы',
    },
    {
      id: 5,
      title: 'Видео-уроки',
      description: 'Записанные уроки для повторения и закрепления материала',
      imageSrc: '/undraw_taking-notes.png',
      imageAlt: 'Видеоурок на экране компьютера',
    },
    {
      id: 6,
      title: 'Бесплатная диагностика уровня',
      description: 'Постоянный мониторинг Ваших результатов и прогресса',
      imageSrc: '/undraw_stepping-up.png',
      imageAlt: 'График прогресса и отчёт по английскому',
    },
  ];

  return (
    <div className="py-0 mb-8 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <Card className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                <CheckBadgeIcon className="h-5 w-5 text-white" />
                <span className="text-white font-semibold text-sm tracking-wide">
                  ГАРАНТИЯ РЕЗУЛЬТАТА
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Премиум английский <br />
                для амбициозных целей
              </h3>
              <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                От уровня начинающего до уверенного собеседника за 6 месяцев.
                <span className="block text-white font-semibold mt-2 text-xl">
                  Присоединяйтесь к 500+ студентам, которые уже изменили свою
                  жизнь благодаря английскому!
                </span>
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    number: '500+',
                    label: 'Студентов',
                    highlight: true,
                    icon: AcademicCapIcon,
                  },
                  {
                    number: '15+',
                    label: 'Лет опыта',
                    icon: ClockIcon,
                  },
                  {
                    number: '98%',
                    label: 'Успеха',
                    highlight: true,
                    icon: TrophyIcon,
                  },
                  {
                    number: '45%',
                    label: 'Скидка',
                    icon: GiftIcon,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-xl transition-all duration-300 ${
                      stat.highlight
                        ? 'bg-white/25 backdrop-blur-sm border border-white/30 shadow-lg'
                        : 'bg-white/15 backdrop-blur-sm border border-white/20'
                    } hover:scale-105 hover:bg-white/30`}
                  >
                    <stat.icon
                      className={`h-8 w-8 mx-auto mb-2 ${
                        stat.highlight ? 'text-white' : 'text-white/90'
                      }`}
                    />
                    <div
                      className={`text-2xl font-bold ${
                        stat.highlight ? 'text-white' : 'text-white/95'
                      } mb-1`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-white/90 text-sm font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="text-lg px-4 py-2 bg-primary-foreground text-primary font-bold shadow-sm hover:bg-primary-foreground/90"
                >
                  <div className="flex items-center gap-3">
                    <GiftIcon className="h-6 w-6" />
                    <span className="text-primary font-bold">
                      Получить 45% скидку
                    </span>
                  </div>
                </Button>
                <div className="flex items-center justify-center gap-2 text-white/90 text-sm font-medium">
                  <BoltIcon className="h-4 w-4 text-yellow-300" />
                  <span>Ограниченное предложение для первых 10 студентов</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mb-12">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Добейтесь реальных результатов с авторской программой
              <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Premium English
              </span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к изучению английского, сочетающий современные
            методики и индивидуальный подход к каждому студенту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridItems.map((item) => (
            <Card
              key={item.id}
              className="group h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 hover:-translate-y-1"
            >
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-6 flex w-full justify-center">
                  <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
