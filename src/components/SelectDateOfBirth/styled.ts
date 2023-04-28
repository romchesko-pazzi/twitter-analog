import styled, { css } from 'styled-components';
import { InputSelectTime } from 'src/types';

const birthdayInputStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.s};
  padding-top: ${({ theme }) => theme.padding.xxl};
  padding-left: ${({ theme }) => theme.padding.l};
  padding-bottom: ${({ theme }) => theme.padding.xxl};
  color: ${({ theme }) => theme.colors.fontColorDark};
  display: block;
`;

const center = css`
  display: flex;
  align-items: center;
`;

export const Main = styled.div<{ title: InputSelectTime }>`
  flex: ${({ title }) => (title === 'Month' ? '1 1 50%' : '1 1 25%')};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

export const SelectBox = styled.div`
  ${center};
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`;

export const Value = styled.span`
  ${birthdayInputStyles};
`;

export const SvgBox = styled.div`
  ${center};
  justify-content: center;
  margin-right: ${({ theme }) => theme.margin['1']};
  min-width: 4rem;
  min-height: 3rem;
  & > svg {
    fill: ${({ theme }) => theme.colors.inputPlaceholderColor};
  }
`;

export const Options = styled.ul<{ display: 'block' | 'none' }>`
  position: absolute;
  bottom: 7.5rem;
  left: 0;
  display: ${({ display }) => display};
  list-style: none;
  max-height: 15rem;
  border-radius: 0.5rem;
  width: 100%;
  z-index: 100;
  overflow-y: scroll;
  max-width: 100%;
  scrollbar-width: none;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const Option = styled.li`
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.fontColorDark};
  background: ${({ theme }) => theme.colors.fontColorLight};
  &:hover {
    color: ${({ theme }) => theme.colors.fontColorLight};
    background: ${({ theme }) => theme.colors.mainColor};
  }
`;
