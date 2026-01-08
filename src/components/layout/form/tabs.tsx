import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface TabsDemoProps {
  searchParams: string;
}

export async function FormTab({ searchParams }: Readonly<TabsDemoProps>) {
  return (
    <div className="flex w-full max-w-md flex-col gap-6 text-center mx-auto my-30">
      <Tabs
        defaultValue={searchParams}
        className="flex flex-col items-center mx-4"
      >
        <TabsList className="dark:bg-neutral-500">
          <Link href="/login">
            <TabsTrigger
              value="login"
              className="text-violet-950 dark:text-purple-200 dark:data-[state=active]:text-purple-200 dark:data-[state=active]:bg-black hover:text-black dark:hover:text-white cursor-pointer"
            >
              Войти
            </TabsTrigger>
          </Link>
          <Link href="/register">
            <TabsTrigger
              value="register"
              className="text-violet-950 dark:text-purple-200 dark:data-[state=active]:text-purple-200 dark:data-[state=active]:bg-black hover:text-black dark:hover:text-white cursor-pointer"
            >
              Регистрация
            </TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="login" className="bg-white dark:bg-black">
          <Card>
            <CardHeader>
              <CardTitle className="text-violet-950 dark:text-purple-200 text-lg">
                Добро пожаловать!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
            <CardFooter>
              <span className="text-center">
                У Вас нет эккаунта?{' '}
                <Link
                  href="/register"
                  className="text-violet-950 dark:text-purple-200"
                >
                  Зарегестрируйтесь
                </Link>
              </span>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle className="text-violet-950 dark:text-purple-200"></CardTitle>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
            <CardFooter>
              <span className="text-center">
                Уже есть эккаунт?{' '}
                <Link
                  href="/login"
                  className="text-violet-950 dark:text-purple-200"
                >
                  Войти
                </Link>
              </span>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
