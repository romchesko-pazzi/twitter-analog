import { InputSelectTime } from 'src/types';

export interface ISelectDateOfBirth {
  title: InputSelectTime;
  items: ReadonlyArray<string> | ReadonlyArray<number>;
}
