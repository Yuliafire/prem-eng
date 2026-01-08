'use client';
import { FormField } from './form-field';
import { loginSchema } from './schemas/login-schema';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth/auth-context';
import { useAuthForm } from '@/hooks/use-auth-form';
import { useLogout } from '@/hooks/use-logout';
import { getAuthErrorInfo } from '@/lib/error-handlers/error-message';

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { handleLogoutSync } = useLogout();

  const schema = loginSchema();

  const { login } = useAuth();

  const {
    form: {
      control,
      handleSubmit,
      formState: { errors, isSubmitting, isValid },
      trigger,
    },
    setAuthError,
    clearAuthError,
    toastSuccess,
    toastError,
    router,
  } = useAuthForm<LoginFormData>({
    schema,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setAuthError('');
      await login(data.email, data.password);

      toastSuccess('Login successful!', {
        action: {
          label: 'Logout',
          onClick: () => handleLogoutSync(),
        },
      });

      router.push('/');
    } catch (error) {
      const authErrorInfo = getAuthErrorInfo(error);
      if (
        authErrorInfo.isInvalidCredentials ||
        /auth\/invalid-credential/.test(authErrorInfo.message)
      )
        toastError('Invalid email or password');
      else
        toastError(`Login error: ${authErrorInfo.message}`, {
          action: {
            label: 'Retry',
            onClick: () => {
              handleSubmit(onSubmit)();
            },
          },
        });
      setAuthError('error');
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
        onFieldChange={clearAuthError}
        trigger={trigger}
      />

      <FormField
        name="password"
        control={control}
        label="Пароль"
        type="password"
        placeholder="Пароль"
        errors={errors.password}
        onFieldChange={clearAuthError}
        trigger={trigger}
      />

      <Button
        type="submit"
        disabled={isSubmitting || !isValid}
        className="bg-black disabled:bg-gray-300 dark:text-white cursor-pointer"
      >
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  );
};
