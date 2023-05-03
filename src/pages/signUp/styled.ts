import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundColor};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  min-width: 70rem;
  min-height: 75rem;
`;

export const Logo = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.margin['3']};

  & svg {
    height: ${({ theme }) => theme.size['4']};
    width: ${({ theme }) => theme.size['4']};
  }
`;

export const ContentBox = styled.div`
  padding: ${({ theme }) => theme.padding.xxxl};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.margin['3']};
`;
