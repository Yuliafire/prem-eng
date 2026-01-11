import { z } from 'zod';
import { avatarSchema, usernameSchema } from './common-schemas';

export const updateAccountSchema = () =>
  z.object({
    username: usernameSchema(),
    avatar: avatarSchema(),
  });
