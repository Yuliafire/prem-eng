'use client';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import avatarImage from '../../../../public/avatar.jpg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ModalButton from '@/components/ui/ModalButton/ModalButton';

export default function Chatbot() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    {
      id: '1',
      role: 'assistant',
      content:
        'Приветик! Я твой 24/7 Online English Mentor, доступен в любое время! Помогу тебе с грамматикой и пополнением словарного запаса!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/chat', {
        messages: [...messages, userMessage].map((m) => ({
          role: m.role,
          content: m.content,
        })),
      });
      const assistantMessage = response.data.message;
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat request failed:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: 'Sorry, I couldn’t process that.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const triggerInputChange = (value: string) => {
    setInput(value);
  };

  return (
    <section
      className="relative min-h-screen bg-background w-full overflow-hidden"
      aria-labelledby="mentor-title"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-8">
          <h2
            id="mentor-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4"
          >
            24/7 Online English Mentor
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-blue-600 rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col items-center justify-center text-center mb-8">
          <Image
            src={avatarImage}
            alt="Mentor Avatar"
            width={200}
            height={200}
            className="rounded-2xl object-cover transform hover:scale-105 transition-transform duration-300 shadow-lg border border-border"
          />
          <div className="mt-4"></div>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="pb-4">
            <h3 className="text-xl font-semibold text-foreground text-center">
              Время учиться!
            </h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-96 overflow-y-auto p-4 bg-muted rounded-lg border border-border">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`mb-4 ${
                    m.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-4 rounded-lg max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300 ${
                      m.role === 'user'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-secondary text-secondary-foreground shadow-md'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-left mb-4">
                  <div className="inline-block p-4 rounded-lg bg-secondary text-secondary-foreground shadow-md">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: '0.4s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end"
            >
              <div className="flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Твое сообщение на английском..."
                  className="w-full"
                  disabled={isLoading}
                  aria-label="Chat input for English practice"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="sm:w-auto w-full"
              >
                {isLoading ? 'Думает...' : 'Отправить'}
              </Button>
            </form>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                variant="outline"
                onClick={() =>
                  triggerInputChange('Suggest a vocabulary quiz for beginners.')
                }
                className="flex items-center gap-2"
                aria-label="Start Vocabulary Quiz"
              >
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                Словарный квиз
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  triggerInputChange('Role-play a job interview in English.')
                }
                className="flex items-center gap-2"
                aria-label="Start Role-Play Scenario"
              >
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                Ролевые сценарии
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 text-center">
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
          </div>

          <ModalButton size="lg" className="min-w-[200px]">
            Бесплатная консультация
          </ModalButton>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            ← Назад на главную
          </Link>
        </div>
      </div>
    </section>
  );
}
