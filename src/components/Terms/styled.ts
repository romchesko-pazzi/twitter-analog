import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const BlueTextStyles = css`
  color: ${({ theme }) => theme.colors.linkColor};
  cursor: pointer;
`;

export const Main = styled.div`
  margin-left: ${({ theme }) => theme.margin['5']};
`;

export const Text = styled.span`
  display: block;
  max-width: ${({ theme }) => theme.size['37.3']};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  line-height: ${({ theme }) => theme.lineHeights.small};
  margin-bottom: ${({ theme }) => theme.margin['2']};
`;

export const BlueText = styled.span`
  ${BlueTextStyles};
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;

export const LinkToLogin = styled(NavLink)`
  ${BlueTextStyles};
`;
