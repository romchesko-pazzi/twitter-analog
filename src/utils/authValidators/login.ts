import * as yup from 'yup';
import { minPasswordLength } from 'src/constants';

const emailPhoneValidation = yup.string().required('Please, enter your phone or email');

const passwordValidation = yup
  .string()
  .required('Password is required')
  .min(minPasswordLength, 'Password must be more than 6 symbols');

export const login = yup.object({
  emailPhone: emailPhoneValidation,
  password: passwordValidation,
});
