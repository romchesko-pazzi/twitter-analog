import styled from 'styled-components';

export const Main = styled.div`
  margin: ${({ theme }) => theme.margin['6.4']} auto 0 auto;
  max-width: ${({ theme }) => theme.size['45']};
  font-family: 'Roboto', sans-serif;
`;

export const Logo = styled.div`
  margin-bottom: ${({ theme }) => theme.margin['3.5']};
  & svg {
    height: ${({ theme }) => theme.size['5']};
    width: ${({ theme }) => theme.size['5']};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  margin-bottom: ${({ theme }) => theme.margin['4.6']};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  margin-bottom: ${({ theme }) => theme.margin['3.5']};
`;
