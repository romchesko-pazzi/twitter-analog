import { Themes } from 'src/constants';
import { ITheme } from 'src/interfaces';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: Themes;
  }
}
