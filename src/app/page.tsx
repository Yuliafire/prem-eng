export const dynamic = 'force-static';

import Image from 'next/image';
import yuliaImage from '../../public/eng.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Feedback from '@/components/layout/feedback/Feedback';
import ClientTitle from '@/components/ui/title/Title';
import Methods from '@/components/layout/methods/Methods';
// import FreeLessons from '@/components/layout/free-lessons/FreeLessons';
import { GiftIcon } from '@heroicons/react/24/outline';
import ModalButton from '@/components/ui/ModalButton/ModalButton';
import ScrollTopBtn from '@/components/ui/scrollTopBtn/ScrollTopBtn';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <ClientTitle />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Уроки Английского
          </h1>

          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-left">
                <div className="flex-shrink-0">
                  <Image
                    src={yuliaImage}
                    alt="Учитель Юлия"
                    width={160}
                    height={160}
                    className="rounded-lg border-2 border-border shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Юлия, эксперт-преподаватель английского с 15-летним стажем и
                    международным опытом.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Автор уникального подхода, изменившего представление об
                    изучении английского для сотен студентов. Превращаю сложный
                    процесс в увлекательное приключение, где финальная награда —
                    свобода общения и уверенность в себе. Помогла сотням людей
                    не просто выучить язык, а по-настоящему заговорить на нём.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Methods />
        <Feedback />

        <Card className="max-w-4xl mx-auto mb-12 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="text-center space-y-6">
              <CardHeader className="p-0">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Свяжитесь для консультации!
                </h2>
              </CardHeader>

              <p className="text-lg text-muted-foreground font-medium">
                Определим уровень, подберем программу, поставим цели!
              </p>

              <Card className="bg-gradient-to-r from-primary to-blue-600 border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-primary-foreground">
                    <span className="text-4xl">
                      <GiftIcon className="h-12 w-12 inline text-white drop-shadow-lg" />
                    </span>

                    <Badge
                      variant="secondary"
                      className="text-lg px-4 py-2 bg-primary-foreground text-primary font-bold shadow-sm"
                    >
                      45% СКИДКА
                    </Badge>
                    <span className="font-semibold text-sm sm:text-base">
                      за первый месяц обучения!
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-primary to-blue-600 border-0">
                <CardContent className="p-6 text-center text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    +1 уровень английского
                  </h3>
                  <p className="text-lg md:text-xl font-semibold">
                    за 3 месяца
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <ModalButton size="lg" className="min-w-[200px]">
            Бесплатная консультация
          </ModalButton>

          <Button variant="link" asChild>
            <a href="/courses">Смотреть все курсы →</a>
          </Button>
        </div>

        <div className="space-y-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-foreground text-center">
                Бесплатные уроки
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Бесплатные материалы появятся здесь...
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <ScrollTopBtn />
    </div>
  );
}
