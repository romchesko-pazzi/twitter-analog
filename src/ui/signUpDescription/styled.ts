import styled from 'styled-components';

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-bottom: ${({ theme }) => theme.margin['1']};
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: ${({ theme }) => theme.margin['2']};
  line-height: ${({ theme }) => theme.lineHeights.default};
  opacity: 0.6;
`;
