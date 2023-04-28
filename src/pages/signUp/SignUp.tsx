import React from 'react';
import { SelectDateOfBirth } from 'src/components';
import { days, months, years } from 'src/constants';
import { BlueButton, SvgSelector } from 'src/ui';

import {
  BirthdayInput,
  ContentBox,
  Description,
  Logo,
  Name,
  PhoneNumber,
  Subtitle,
  Title,
  UseEmail,
  Wrapper,
} from './styled';

export const SignUp = () => {
  return (
    <Wrapper>
      <Logo>
        <SvgSelector name="logo" />
      </Logo>
      <ContentBox>
        <Title>Create an account</Title>
        <Name placeholder="Name" />
        <PhoneNumber placeholder="Phone number" />
        <UseEmail to="/">Use email</UseEmail>
        <Subtitle>Date of birth</Subtitle>
        <Description>
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis
          bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo
          mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus.
          Nibh mi massa in molestie a sit. Elit congue.
        </Description>
        <BirthdayInput>
          <SelectDateOfBirth title="Month" items={months} />
          <SelectDateOfBirth title="Day" items={days} />
          <SelectDateOfBirth title="Year" items={years} />
        </BirthdayInput>
        <BlueButton title="Next" />
      </ContentBox>
    </Wrapper>
  );
};
