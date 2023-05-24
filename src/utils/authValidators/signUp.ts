import * as yup from 'yup';
import { maxNameLength } from 'src/constants';

const nameValidation = yup
  .string()
  .max(maxNameLength, 'Name must be less than 50 symbols')
  .required('What’s your name?');

const phoneValidation = yup.string().required('Please, enter your number');

export const signUp = yup.object({
  name: nameValidation,
  phoneNumber: phoneValidation,
});
