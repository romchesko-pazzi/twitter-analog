import styled from 'styled-components';

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  cursor: pointer;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.fontColorLight};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: ${({ theme }) => theme.padding.m} 0 ${({ theme }) => theme.padding.m} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
