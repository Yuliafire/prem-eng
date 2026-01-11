'use client';
import { useEffect } from 'react';
import { useAuth } from '@/context/auth/auth-context';
import { useRouter } from 'next/navigation';

interface FormWrapperProps {
  children: React.ReactNode;
  requireUnauth?: boolean;
  // redirectPath?: string;
}

export const FormWrapper = ({
  children,
  requireUnauth = true,
  // redirectPath = '/chat',
}: FormWrapperProps) => {
  const { authToken, currentUser } = useAuth();
  const router = useRouter();
  const isAuthenticated = authToken && currentUser;

  useEffect(() => {
    if (requireUnauth && isAuthenticated) {
      router.push('/');
      // router.push(redirectPath);
    }
  }, [isAuthenticated, router, requireUnauth]);

  if (requireUnauth && isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
