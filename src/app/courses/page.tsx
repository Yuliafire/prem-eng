export const dynamic = 'force-static';

import Link from 'next/link';
import { courses } from '@/data/courses';
import { ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ModalButton from '@/components/ui/ModalButton/ModalButton';
import ScrollTopBtn from '@/components/ui/scrollTopBtn/ScrollTopBtn';

// import globeImage from '../../../public/team-img/11383062.png';

export default function CoursesSection() {
  return (
    <section className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="courses-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4"
          >
            Программы для любых целей с гарантией результата
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-blue-600 rounded-full mb-8"></div>

          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              ← Назад на главную
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 flex flex-col h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-blue-600 rounded-lg">
                  <course.icon
                    className="h-8 w-8 text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4 flex-1">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-center">
                  <Badge
                    variant="secondary"
                    className="text-lg font-bold px-4 py-2"
                  >
                    {course.price}
                  </Badge>
                </div>

                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <ClockIcon
                    className="h-4 w-4 mr-2 text-primary"
                    aria-hidden="true"
                  />
                  {course.duration}
                </div>

                <ul className="space-y-3">
                  {course.features.map((feature, i) => (
                    <li
                      key={`${course.id}-${i}`}
                      className="flex items-start text-sm"
                    >
                      <CheckCircleIcon
                        className="h-4 w-4 mr-3 text-green-500 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button className="w-full" asChild size="lg">
                  <Link
                    href="/payment"
                    aria-label={`Оплатить курс ${course.title}`}
                  >
                    ОПЛАТИТЬ
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 border-0 shadow-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Не можете выбрать подходящий курс?
            </h3>
            <p className="text-muted-foreground mb-4">
              Получите бесплатную консультацию и мы поможем подобрать
              оптимальную программу обучения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col gap-2">
                <p className="text-muted-foreground">Нужна помощь?</p>

                <a
                  href="https://t.me/lingua_voice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  Написать в Telegram
                </a>

                <ModalButton size="lg" className="min-w-[200px]">
                  Бесплатная консультация
                </ModalButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <ScrollTopBtn />
    </section>
  );
}
