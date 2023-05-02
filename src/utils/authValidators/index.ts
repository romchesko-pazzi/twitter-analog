import * as yup from 'yup';
import { maxNameLength } from 'src/constants';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameValidation = yup
  .string()
  .max(maxNameLength, 'Name must be less than 50 symbols')
  .required('What’s your name?');

const phoneValidation = yup
  .string()
  .matches(phoneRegExp, 'Phone number is not valid')
  .required('Please, enter your number');

export const auth = yup.object({
  name: nameValidation,
  phoneNumber: phoneValidation,
});
