import { FirebaseError } from 'firebase/app';

export interface RegistrationError {
  message: string;
  code?: string;
  isEmailInUse?: boolean;
  isWeakPassword?: boolean;
  isInvalidEmail?: boolean;
  isUploadError?: boolean;
}

export const handleRegistrationError = (error: unknown): RegistrationError => {
  if (error instanceof FirebaseError) {
    return error.code === 'auth/email-already-in-use'
      ? {
          message: 'Email used',
          code: error.code,
          isEmailInUse: true,
        }
      : {
          message: 'Registration failed',
          code: error.code,
        };
  }

  if (error instanceof Error && error.message.includes('Upload failed')) {
    return {
      message: 'Upload failed',
      isUploadError: true,
    };
  }

  return {
    message: 'Registration failed',
  };
};
