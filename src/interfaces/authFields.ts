import { Months } from 'src/types';

export interface IAuthFields {
  name: string;
  phoneNumber: string;
  Month?: Months;
  Day: number;
  Year: number;
}

export interface InputProps {
  hasError: boolean;
}
