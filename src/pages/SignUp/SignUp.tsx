import React from 'react';
import { BlueButton, SvgSelector } from 'src/components';

import {
  BirthdayBox,
  BirthdayInput,
  ContentBox,
  Day,
  Description,
  Fields,
  Logo,
  Month,
  Name,
  PhoneNumber,
  SelectBox,
  Subtitle,
  SvgBox,
  Title,
  UseEmail,
  Value,
  Wrapper,
  Year,
} from './styled';

export const SignUp = () => {
  return (
    <Wrapper>
      <Logo>
        <SvgSelector name="logo" />
      </Logo>
      <ContentBox>
        <Title>Create an account</Title>
        <Fields>
          <Name placeholder="Name" />
          <PhoneNumber placeholder="Phone number" />
          <UseEmail to="/">Use email</UseEmail>
          <BirthdayBox>
            <Subtitle>Date of birth</Subtitle>
            <Description>
              Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis
              bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur
              leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget
              tellus. Nibh mi massa in molestie a sit. Elit congue.
            </Description>
            <BirthdayInput>
              <Month>
                <SelectBox>
                  <Value>Month</Value>
                  <SvgBox>
                    <SvgSelector name="vector" />
                  </SvgBox>
                </SelectBox>
              </Month>
              <Day>
                <SelectBox>
                  <Value>Day</Value>
                  <SvgBox>
                    <SvgSelector name="vector" />
                  </SvgBox>
                </SelectBox>
              </Day>
              <Year>
                <SelectBox>
                  <Value>Year</Value>
                  <SvgBox>
                    <SvgSelector name="vector" />
                  </SvgBox>
                </SelectBox>
              </Year>
            </BirthdayInput>
            <BlueButton title="Next" />
          </BirthdayBox>
        </Fields>
      </ContentBox>
    </Wrapper>
  );
};
