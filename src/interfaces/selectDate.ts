import { UseFormSetValue } from 'react-hook-form';
import { IAuthFields } from 'src/interfaces/authFields';
import { InputSelectName, Months } from 'src/types';

export interface ISelectDateOfBirth {
  title: InputSelectName;
  items: ReadonlyArray<Months> | ReadonlyArray<number>;
  setValue: UseFormSetValue<IAuthFields>;
}
