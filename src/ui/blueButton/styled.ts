import styled from 'styled-components';

export const Box = styled.button<{ disabled: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.mainDisabledColor : theme.colors.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  cursor: pointer;
  min-width: 100%;
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
