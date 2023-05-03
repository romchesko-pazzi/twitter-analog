import styled from 'styled-components';

export const Main = styled.div`
  margin-left: ${({ theme }) => theme.margin['5']};
  padding: ${({ theme }) => theme.padding.xl} 0 ${({ theme }) => theme.padding.xl} 0;
  display: flex;
  justify-content: center;
`;

export const Text = styled.span`
  max-width: ${({ theme }) => theme.size['37.3']};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  line-height: ${({ theme }) => theme.lineHeights.tiny};
  margin-right: ${({ theme }) => theme.margin['2']};
`;
