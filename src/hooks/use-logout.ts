import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useToast } from '@/components/ui/sonner';
import { useAuth } from '@/context/auth/auth-context';

export const useLogout = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const { toastError, toastSuccess } = useToast();

  const handleLogout = useCallback(async (): Promise<void> => {
    try {
      await logout();
      toastSuccess('Logged out successfully');
      router.push('/');
    } catch (error) {
      const retryLogout = () => {
        logout()
          .then(() => {
            toastSuccess('Logged out successfully');
            router.push('/');
          })
          .catch((retryError) => {
            toastError('Retry logout error:', {
              additionalMessage:
                retryError instanceof Error
                  ? retryError.message
                  : "Can't logout error",
              duration: 3000,
            });
          });
      };

      if (error instanceof Error) {
        toastError(`Logout error: ${error.message}`, {
          action: {
            label: 'Retry',
            onClick: retryLogout,
          },
        });
      } else {
        toastError('Logout failed', {
          action: {
            label: 'Retry',
            onClick: retryLogout,
          },
        });
      }
    }
  }, [logout, router, toastError, toastSuccess]);

  const handleLogoutSync = useCallback((): void => {
    handleLogout().catch((error) => {
      console.error('Logout error:', error);
    });
  }, [handleLogout]);

  return {
    handleLogout,
    handleLogoutSync,
  };
};
