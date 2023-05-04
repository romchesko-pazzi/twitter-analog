import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { inputStyles, labelStyles } from 'src/assets';
import { InputProps } from 'src/interfaces';

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
  display: inline-block;
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
