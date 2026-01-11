import { z } from 'zod';

export const usernameSchema = () =>
  z
    .string()
    .optional()
    .refine((val) => !val || val[0]?.toUpperCase() === val[0], {
      message: 'Name must start with an uppercase letter',
    })
    .refine((val) => !val || (val.length >= 3 && val.length <= 20), {
      message: 'Name must be between 3 and 20 characters',
    })
    .refine((val) => !val || /^[a-zA-Zа-яА-Я\d_ ]+$/.test(val), {
      message: 'Name can only contain letters, numbers, spaces and underscores',
    });

export const avatarSchema = () =>
  z
    .instanceof(File)
    .optional()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith('image/')),
      'File must be an image'
    )
    .refine(
      (file) => !file || file.size <= 500 * 1024,
      'Image must be less than 500KB'
    )
    .refine((file) => {
      if (!file) return true;
      const estimatedBase64Size = file.size * 1.37;
      return estimatedBase64Size <= 700 * 1024;
    }, 'Image is too large for storage');

export const passwordSchema = () =>
  z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters');

export const simplePasswordSchema = () =>
  z.string().min(6, 'Password must be at least 6 characters');

export const emailSchema = () =>
  z.string().min(1, 'Email is required').email('Invalid email address');
