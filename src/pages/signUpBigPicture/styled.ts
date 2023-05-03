import styled, { css } from 'styled-components';

const titleStyles = css`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  margin-left: ${({ theme }) => theme.margin['4']};
`;

export const Main = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export const TopContent = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  margin: ${({ theme }) => theme.margin['20']} 0 ${({ theme }) => theme.margin['5.7']}
    ${({ theme }) => theme.margin['4.3']};
  & svg {
    height: ${({ theme }) => theme.size['5']};
    width: ${({ theme }) => theme.size['5']};
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  ${titleStyles};
  margin-bottom: ${({ theme }) => theme.margin['4.6']};
  line-height: ${({ theme }) => theme.lineHeights.big};
`;

export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  ${titleStyles};
  margin-bottom: ${({ theme }) => theme.margin['3.5']};
  line-height: ${({ theme }) => theme.lineHeights.medium};
`;
