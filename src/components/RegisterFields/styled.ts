import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { InputProps } from 'src/interfaces';

const labelStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  margin-bottom: ${({ theme }) => theme.margin['2']};
  padding-left: ${({ theme }) => theme.padding.xs};
  padding-top: ${({ theme }) => theme.padding.xxxs};
  display: block;
  height: ${({ theme }) => theme.height['2.4']};
  color: ${({ theme }) => theme.colors.errorColor};
`;

const inputStyles = css<InputProps>`
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.errorColor : theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  width: 100%;
  outline: none;
  padding-top: ${({ theme }) => theme.padding.xxl};
  padding-left: ${({ theme }) => theme.padding.l};
  padding-bottom: ${({ theme }) => theme.padding.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  color: ${({ theme }) => theme.colors.fontColorDark};
  &::placeholder {
    color: ${({ theme, hasError }) =>
      hasError ? theme.colors.errorColor : theme.colors.inputPlaceholderColor};
  }
`;

export const Input = styled.input<InputProps>`
  ${inputStyles}
`;

export const NameErrorLabel = styled.label`
  ${labelStyles};
  margin-bottom: ${({ theme }) => theme.margin['2']};
`;

export const PhoneErrorLabel = styled.label`
  ${labelStyles};
  margin-bottom: ${({ theme }) => theme.margin['3']};
`;

export const UseEmail = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-bottom: ${({ theme }) => theme.margin['4']};
  display: block;
`;

export const BirthdayInput = styled.div`
  display: flex;
  & > div:not(:last-child) {
    margin-right: ${({ theme }) => theme.margin['2']};
  }
  margin-bottom: ${({ theme }) => theme.margin['6.4']};
`;

export const PhoneInputWrapper = styled.div<InputProps>`
  & input {
    ${inputStyles}
  }
`;
