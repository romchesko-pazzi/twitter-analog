import styled, { css } from 'styled-components';

export const buttonStyle = css`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.borderButtonColor};
  padding: ${({ theme }) => theme.padding.xl} 0 ${({ theme }) => theme.padding.xl} 0;

  display: flex;
  justify-content: center;
  min-width: 100%;
`;

export const Buttons = styled.div`
  max-width: ${({ theme }) => theme.size['40.3']};
  margin: 0 0 ${({ theme }) => theme.margin['3']} ${({ theme }) => theme.margin['5']};
`;

export const GoogleButton = styled.button`
  ${buttonStyle};
  margin-bottom: ${({ theme }) => theme.margin['2']};

  & svg {
    height: ${({ theme }) => theme.size['2.4']};
    width: ${({ theme }) => theme.size['2.4']};
    margin-right: ${({ theme }) => theme.padding.xxxs};
  }
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.fontColorDark};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.default};
`;
export const EmailPhoneButton = styled.button`
  ${buttonStyle};
`;
