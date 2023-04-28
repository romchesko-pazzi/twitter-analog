import { DefaultTheme } from 'styled-components';
import { Themes } from 'src/constants';
import { ITheme } from 'src/interfaces';

const baseTheme: ITheme = {
  colors: {
    mainColor: '#1DA1F2',
    mainBackgroundColor: '#F9F9FA',
    fontColorDark: '#000000',
    fontColorLight: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    inputPlaceholderColor: 'rgba(0, 0, 0, 0.6)',
  },
  fontSizes: {
    xxs: '1.4rem',
    xs: '1.6rem',
    s: '1.8rem',
    m: '2rem',
    l: '2.4rem',
    xl: '3rem',
    xxl: '4.2rem',
    xxxl: '8.4rem',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  padding: {
    xxs: '1rem',
    xs: '1.4rem',
    s: '1.6rem',
    m: '1.8rem',
    l: '1.9rem',
    xl: '2.1rem',
    xxl: '2.3rem',
    xxxl: '4rem',
  },
  borderRadius: {
    s: '0.6rem',
    m: '2.75rem',
    l: '3.1rem',
  },
  margin: {
    '1': '1rem',
    '2': '2rem',
    '2.5': '2.5rem',
    '3': '3rem',
    '3.5': '3.5rem',
    '4': '4rem',
    '4.3': '4.3rem',
    '6.4': '6.4rem',
  },
  lineHeights: {
    tiny: '1.5rem',
    small: '2rem',
    default: '2.4rem',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: Themes.light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: Themes.dark,

  colors: {
    ...baseTheme.colors,
    fontColorLight: '#FFFFFF',
    backgroundColor: '#000000',
  },
};
