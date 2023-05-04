import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { inputStyles, labelStyles } from 'src/assets';
import { InputProps } from 'src/interfaces';

export const EmailPhone = styled.input<InputProps>`
  ${inputStyles}
`;

export const Password = styled.input<InputProps>`
  ${inputStyles}
`;

export const EmailPhoneLabel = styled.label`
  ${labelStyles};
  margin-bottom: ${({ theme }) => theme.margin['1']};
`;

export const PasswordLabel = styled.label`
  ${labelStyles};
  margin-bottom: ${({ theme }) => theme.margin['1']};
`;

export const LinkToSignUp = styled(NavLink)`
  display: block;
  margin-top: ${({ theme }) => theme.margin['4']};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.small};
  text-align: right;
  color: ${({ theme }) => theme.colors.mainColor};
`;
