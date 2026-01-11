'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  SunIcon,
  MoonIcon,
  HomeIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export default function Header() {
  const [isClick, setIsClick] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleNavbar = () => {
    setIsClick((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (!isClick) return;

      if (buttonRef.current && buttonRef.current.contains(target)) {
        return;
      }

      if (menuRef.current && menuRef.current.contains(target)) {
        return;
      }

      setIsClick(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isClick]);

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === 'light' ? 'dark' : 'light'
                } theme`}
              >
                {theme === 'light' ? (
                  <MoonIcon className="h-4 w-4" />
                ) : (
                  <SunIcon className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-primary bg-gradient-to-r from-primary/20 to-transparent bg-clip-text hover:text-primary/80 transition-colors"
                aria-label="Premium English Homepage"
              >
                <AcademicCapIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                Premium English
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </Link>
            <Link
              href="/courses"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Курсы
            </Link>
            <Link
              href="/chat"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              24/7 English
            </Link>
            <Link
              href="/eng-test"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Узнай уровень
            </Link>
            <Link
              href="/eng-club"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Разговорный Клуб
            </Link>
            <Button
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="/login">Войти</Link>
            </Button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              ref={buttonRef}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
              onClick={toggleNavbar}
              aria-label={isClick ? 'Close menu' : 'Open menu'}
            >
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isClick && (
        <div
          ref={menuRef}
          className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-background/95 backdrop-blur-md border-b border-border shadow-lg md:hidden"
        >
          <div className="block text-left space-y-3">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-semibold text-lg"
              aria-label="Главная страница"
              onClick={closeNavbar}
            >
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              Главная
            </Link>

            <Link
              href="/courses"
              className="flex items-center gap-3 px-3 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-semibold text-lg"
              aria-label="Курсы"
              onClick={closeNavbar}
            >
              <AcademicCapIcon
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              Курсы
            </Link>

            <Link
              href="/chat"
              className="flex items-center gap-3 px-3 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-semibold text-lg"
              aria-label="24/7 English"
              onClick={closeNavbar}
            >
              <ChatBubbleLeftRightIcon
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              24/7 English
            </Link>

            <Link
              href="/eng-test"
              className="flex items-center gap-3 px-3 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-semibold text-lg"
              aria-label="Узнай уровень"
              onClick={closeNavbar}
            >
              <QuestionMarkCircleIcon
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              Узнай уровень
            </Link>

            <Link
              href="/eng-club"
              className="flex items-center gap-3 px-3 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-semibold text-lg"
              aria-label="Разговорный Клуб"
              onClick={closeNavbar}
            >
              <UsersIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              Разговорный Клуб
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-3 px-3 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-semibold text-lg"
              aria-label="Контакты"
              onClick={closeNavbar}
            >
              <EnvelopeIcon
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              Контакты
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-3 px-3 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-semibold text-lg"
              aria-label="Login"
              onClick={closeNavbar}
            >
              Войти
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
