import styled from 'styled-components';

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
  color: ${({ theme }) => theme.colors.linkColor};
  cursor: pointer;
`;

export const LinkToLogin = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;
