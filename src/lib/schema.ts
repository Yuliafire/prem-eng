import * as yup from 'yup';

export const phoneRegex = /^\+79\d{9}$/;

export const formSchema = yup.object().shape({
  name: yup.string().required('Имя обязательно'),
  email: yup
    .string()
    .email('Некорректный адрес электронной почты')
    .required('Email обязателен'),
  acceptedTC: yup
    .boolean()
    .oneOf([true], 'Вы должны принять условия использования')
    .required(),
  phone: yup
    .string()
    .required('Номер телефона обязателен')
    .matches(
      phoneRegex,
      'Номер телефона должен быть в формате +79XXXXXXXXX, например, +79184653807'
    ),
});

export type FormData = yup.InferType<typeof formSchema>;
