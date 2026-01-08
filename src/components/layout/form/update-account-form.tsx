'use client';
import { Controller } from 'react-hook-form';
import { FormField } from './form-field';
import { updateAccountSchema } from './schemas/update-schema';
import { AvatarInput } from '@/components/ui/avatar-input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toastError } from '@/components/ui/sonner';
import { useAuth } from '@/context/auth/auth-context';
import { useAuthForm } from '@/hooks/use-auth-form';
import { useRouter } from 'next/navigation';

interface UpdateAccountFormProps {
  onSuccess?: () => void;
}

export const UpdateAccountForm = ({ onSuccess }: UpdateAccountFormProps) => {
  const schema = updateAccountSchema();
  const { currentUser, updateProfile } = useAuth();
  const router = useRouter();

  const {
    form: {
      control,
      handleSubmit,
      formState: { errors, isSubmitting, isValid },
      trigger,
    },
  } = useAuthForm<{ username?: string; avatar?: File }>({
    schema,
    redirectOnAuth: false,
    defaultValues: {
      username: currentUser?.displayName || '',
      avatar: undefined,
    },
  });

  const onSubmit = async (data: { username?: string; avatar?: File }) => {
    try {
      await updateProfile(data.username, data.avatar);
      onSuccess?.();
      router.push('/');
    } catch (err) {
      toastError(JSON.stringify(err));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <FormField
        name="username"
        control={control}
        label="Display Name"
        type="text"
        placeholder="Enter your display name"
        errors={errors.username}
        trigger={trigger}
      />

      <div className="grid gap-3">
        <Label htmlFor="avatar" className="text-base">
          Profile Picture
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
              placeholder="Upload a profile picture"
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
        Update Account
      </Button>
    </form>
  );
};
