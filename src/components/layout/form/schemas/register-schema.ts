import { avatarSchema, usernameSchema } from './common-schemas';
import { loginSchema } from './login-schema';

export const registerSchema = () =>
  loginSchema().extend({
    username: usernameSchema(),
    avatar: avatarSchema(),
  });
