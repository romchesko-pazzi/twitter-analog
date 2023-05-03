import { FontWeight } from 'src/types';

export interface ITheme {
  colors: {
    mainColor: '#1DA1F2';
    mainDisabledColor: '#1da1f266';
    mainBackgroundColor: '#F9F9FA';
    fontColorDark: '#000000';
    fontColorLight: '#FFFFFF';
    backgroundColor: '#FFFFFF' | '#000000';
    borderColor: '#00000033';
    borderButtonColor: '#E4EAED';
    inputPlaceholderColor: '#00000099';
    errorColor: '#ff3333';
    linkColor: '#1e97e1';
  };
  fontSizes: {
    xxs: '1.4rem';
    xs: '1.6rem';
    s: '1.8rem';
    m: '2rem';
    l: '2.4rem';
    xl: '3rem';
    xxl: '4.2rem';
    xxxl: '8.4rem';
  };
  fontWeights: {
    normal: FontWeight.normal;
    medium: FontWeight.medium;
    bold: FontWeight.bold;
    extraBold: FontWeight.extraBold;
  };
  padding: {
    xxxs: '0.5rem';
    xxs: '1rem';
    xs: '1.4rem';
    s: '1.6rem';
    m: '1.8rem';
    l: '1.9rem';
    xl: '2.1rem';
    xxl: '2.3rem';
    xxxl: '4rem';
  };
  borderRadius: {
    s: '0.6rem';
    m: '2.75rem';
    l: '3.1rem';
    xl: '10rem';
  };
  margin: {
    '1': '1rem';
    '2': '2rem';
    '2.5': '2.5rem';
    '3': '3rem';
    '3.5': '3.5rem';
    '4': '4rem';
    '4.3': '4.3rem';
    '4.6': '4.6rem';
    '5': '5rem';
    '5.7': '5.7rem';
    '6.4': '6.4rem';
    '20': '20rem';
  };
  lineHeights: {
    tiny: '1.5rem';
    small: '2rem';
    default: '2.4rem';
    medium: '4.9rem';
    big: '9.8rem';
  };
  size: {
    '2.4': '2.4rem';
    '4': '4rem';
    '5': '5rem';
    '40.3': '40.3rem';
    '37.3': '37.3rem';
  };
}
