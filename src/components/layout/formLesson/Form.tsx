'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData, formSchema } from '@/lib/schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function ContactForm({ onSubmit }: FormProps) {
  const form = useForm<FormData>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      acceptedTC: false,
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  return (
    <Form {...form}>
      <form
        action="https://formspree.io/f/mleykrkd"
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Введите ваше имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Электронный адрес</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+79XXXXXXXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptedTC"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">
                  Согласен(на) на обработку данных
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <input
          type="hidden"
          name="_subject"
          value="New Registration from English Lessons Site"
        />
        <input
          type="hidden"
          name="_next"
          value="https://yourdomain.com/thank-you"
        />

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full py-6"
        >
          {isSubmitting ? 'Отправляется...' : 'Отправить'}
        </Button>
      </form>
    </Form>
  );
}
