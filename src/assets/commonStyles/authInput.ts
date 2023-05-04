import { css } from 'styled-components';
import { InputProps } from 'src/interfaces';

export const inputStyles = css<InputProps>`
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.errorColor : theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  width: 100%;
  outline: none;
  padding: ${({ theme }) => theme.padding.xxl} 0 ${({ theme }) => theme.padding.xxl}
    ${({ theme }) => theme.padding.l};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  color: ${({ theme }) => theme.colors.fontColorDark};
  &::placeholder {
    color: ${({ theme, hasError }) =>
      hasError ? theme.colors.errorColor : theme.colors.inputPlaceholderColor};
  }
`;

export const labelStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  margin-bottom: ${({ theme }) => theme.margin['2']};
  padding: ${({ theme }) => theme.padding.xxxs} 0 0 ${({ theme }) => theme.padding.xs};
  display: block;
  height: ${({ theme }) => theme.size['2.4']};
  color: ${({ theme }) => theme.colors.errorColor};
`;
