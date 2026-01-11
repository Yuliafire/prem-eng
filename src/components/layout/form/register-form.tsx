'use client';
import { Controller } from 'react-hook-form';
import { FormField } from './form-field';
import { registerSchema } from './schemas/register-schema';
import { AvatarInput } from '@/components/ui/avatar-input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/sonner';
import { useAuth } from '@/context/auth/auth-context';
import { useAuthForm } from '@/hooks/use-auth-form';
import { useLogout } from '@/hooks/use-logout';
import { useRouter } from 'next/navigation';
import { handleRegistrationError } from '@/lib/error-handlers/registration-error-handler';

interface RegisterFormData {
  email: string;
  password: string;
  username?: string;
  avatar?: File;
}

export const RegisterForm = () => {
  const schema = registerSchema();

  const { toastSuccess, toastError } = useToast();
  const router = useRouter();
  const { register } = useAuth();
  const { handleLogoutSync } = useLogout();

  const {
    form: {
      control,
      handleSubmit,
      formState: { errors, isSubmitting, isValid },
      trigger,
    },
  } = useAuthForm<RegisterFormData>({
    schema,
    redirectOnAuth: false,
    defaultValues: {
      email: '',
      password: '',
      username: '',
      avatar: undefined,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await register(data.email, data.password, data.username, data.avatar);

      toastSuccess('Account created successfully!', {
        action: {
          label: 'Logout',
          onClick: () => handleLogoutSync(),
        },
      });
      router.push('/');
    } catch (err) {
      const error = handleRegistrationError(err);

      if (error.isEmailInUse) {
        toastError('This email is already registered');
      } else {
        toastError(`Registration error: ${error.code}`, {
          action: {
            label: 'Try Again',
            onClick: () => handleSubmit(onSubmit)(),
          },
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <FormField
        name="email"
        control={control}
        label="Электронная почта"
        type="email"
        placeholder="email@example.com"
        errors={errors.email}
        trigger={trigger}
      />

      <FormField
        name="password"
        control={control}
        label="Пароль"
        type="password"
        placeholder="Пароль"
        errors={errors.password}
        trigger={trigger}
      />

      <FormField
        name="username"
        control={control}
        label="Имя (Необязательно)"
        type="text"
        placeholder="Владимир Путин"
        errors={errors.username}
        trigger={trigger}
      />

      <div className="grid gap-3">
        <Label htmlFor="avatar" className="text-base">
          Аватар (Необязательно)
        </Label>
        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <AvatarInput
              onAvatarChange={(file) => {
                field.onChange(file);
                trigger('avatar');
              }}
              placeholder="Загрузите изображение"
            />
          )}
        />
        {errors.avatar && (
          <span className="text-red-600 text-left">
            {errors.avatar.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !isValid}
        className="bg-black disabled:bg-gray-300 dark:text-white cursor-pointer"
      >
        {isSubmitting ? 'Создаем эккаунт...' : 'Создать эккаунт'}{' '}
      </Button>
    </form>
  );
};
