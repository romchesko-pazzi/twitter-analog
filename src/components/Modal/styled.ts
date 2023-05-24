import styled from 'styled-components';
import { inputStyles } from 'src/assets';

export const OnCloseBox = styled.div``;

export const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: ${({ theme }) => theme.size['47.6']};
  min-height: ${({ theme }) => theme.size['37.3']};
  background-color: #ffffff;
  padding: ${({ theme }) => theme.padding.xxl};
  border-radius: 1.4rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px black solid;
`;

export const TextBlock = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.margin['1']};
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  display: inline-block;
`;

export const Input = styled.input`
  ${inputStyles};
`;
