export const dynamic = 'force-static';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import ModalButton from '@/components/ui/ModalButton/ModalButton';
import ScrollTopBtn from '@/components/ui/scrollTopBtn/ScrollTopBtn';

export default function Club() {
  const features = [
    {
      title: 'Регулярные встречи',
      description:
        'Живая практика разговорного английского в небольшой группе с единомышленниками',
    },
    {
      title: 'Адаптированные темы',
      description:
        'Интерактивные задания для всех уровней - от начинающих до продвинутых',
    },
    {
      title: 'Профессиональное руководство',
      description:
        'Персональное руководство от сертифицированного преподавателя с 15+ годами опыта',
    },
    {
      title: 'Новые знакомства',
      description:
        'Возможность встретить новых друзей-единомышленников в комфортной атмосфере',
    },
    {
      title: 'Поддерживающая среда',
      description:
        'Дружелюбная атмосфера, где каждый чувствует себя комфортно и уверенно',
    },
    {
      title: 'Доступная цена',
      description:
        'Всего 3999 рублей в месяц за неограниченный доступ к встречам и материалам',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4."> */}
          {/* Разговорный клуб */}
          {/* </h2> */}
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-4"> */}
          {/* Разговорный клуб */}
          {/* </h2> */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Разговорный клуб
          </h2>

          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-blue-600 rounded-full mb-8"></div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Совершенствуйте свой английский в живом общении с профессиональным
            преподавателем и единомышленниками
          </p>
        </div>
        <Card className="mb-12 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight mb-4">
              Готовы заговорить на английском свободно?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Присоединяйтесь к нашему разговорному клубу и начните практиковать
              английский в комфортной атмосфере с профессиональным
              преподавателем
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ModalButton size="lg" className="min-w-[200px]">
                Присоединиться к клубу
              </ModalButton>
              <ModalButton
                variant="outline"
                size="lg"
                className="min-w-[200px]"
              >
                Бесплатная пробная встреча
              </ModalButton>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-muted-foreground">Участников</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-xl border-border hover:shadow-2xl transition-all duration-300 hover:border-primary/20 mb-12">
          <CardHeader className="text-center pb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Почему выбрать наш клуб?
            </h3>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-accent/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-foreground mb-2">
                  Всего 3 999 ₽ в месяц
                </div>
                <p className="text-muted-foreground">
                  Неограниченный доступ ко всем встречам и материалам клуба
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            ← Назад на главную
          </Link>
        </div>
        <ScrollTopBtn />
      </div>
    </div>
  );
}
