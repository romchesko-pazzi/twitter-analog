import { months } from 'src/constants';

export type InputSelectName = 'Year' | 'Day' | 'Month';
export type Months = (typeof months)[number];
