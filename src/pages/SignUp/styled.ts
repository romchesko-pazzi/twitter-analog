import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const inputStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  padding-top: ${({ theme }) => theme.padding.xxl};
  padding-left: ${({ theme }) => theme.padding.l};
  padding-bottom: ${({ theme }) => theme.padding.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  color: rgba(0, 0, 0, 0.6);
`;

const birthdayInputStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.s};
  padding-top: ${({ theme }) => theme.padding.xxl};
  padding-left: ${({ theme }) => theme.padding.l};
  padding-bottom: ${({ theme }) => theme.padding.xxl};
  color: rgba(0, 0, 0, 0.6);

  display: block;
`;

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
    height: 4rem;
    width: 4rem;
  }
`;

export const ContentBox = styled.div`
  padding: ${({ theme }) => theme.padding.xxxl};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.margin['3']};
`;

export const Fields = styled.div``;
export const Name = styled.input`
  ${inputStyles};
  margin-bottom: ${({ theme }) => theme.margin['2.5']};
`;

export const PhoneNumber = styled.input`
  ${inputStyles};
  margin-bottom: ${({ theme }) => theme.margin['3']};
`;

export const UseEmail = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-bottom: ${({ theme }) => theme.margin['4']};
  display: block;
`;

export const BirthdayBox = styled.div``;
export const Subtitle = styled.div`
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

export const BirthdayInput = styled.div`
  display: flex;
  & > div:not(:last-child) {
    margin-right: ${({ theme }) => theme.margin['2']};
  }
  margin-bottom: ${({ theme }) => theme.margin['6.4']};
`;

export const Month = styled.div`
  flex: 1 1 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.span`
  ${birthdayInputStyles};
`;

export const SvgBox = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.margin['2.5']};
  & > svg {
    cursor: pointer;
    fill: rgba(0, 0, 0, 0.6);
  }
`;

export const Day = styled.div`
  flex: 1 1 25%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

export const Year = styled.div`
  flex: 1 1 25%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;
