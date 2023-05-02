import { limitYear, startYear } from 'src/constants';

const years: Array<number> = [];

for (let i = startYear; i <= limitYear; i++) {
  years.push(i);
}

export { years };
