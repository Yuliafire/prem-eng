import type { Metadata } from 'next';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import './globals.css';
import { ThemeProvider } from '../context/ThemeProvider';
import { AuthProvider } from '@/context/auth/auth-provider';
import { Toaster } from 'sonner';
// import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.ru'),
  title: {
    default: 'Онлайн‑курсы английского для русскоязычных студентов | Yulia',
    template: '%s | Онлайн‑английский с Yulia',
  },
  description:
    'Онлайн‑курсы английского для русскоязычных студентов из России: разговорный английский, подготовка к экзаменам и карьерный английский. Индивидуальные и мини‑группы, гибкий график, живая практика с преподавателем.',
  keywords: [
    'курсы английского онлайн',
    'английский для русскоговорящих',
    'английский для взрослых',
    'репетитор английского онлайн',
    'английский по скайпу',
    'курсы английского для студентов из России',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://your-domain.ru',
    siteName: 'Онлайн‑английский с Yulia',
    title: 'Онлайн‑курсы английского для русскоязычных студентов',
    description:
      'Авторские онлайн‑курсы английского языка для русскоязычных студентов из России: говорите уверенно, готовьтесь к экзаменам и развитию карьеры с поддержкой опытного преподавателя.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Онлайн‑уроки английского с русскоязычным преподавателем Yulia',
      },
    ],
  },
  alternates: {
    canonical: 'https://your-domain.ru',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
