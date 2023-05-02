import React from 'react';
import { RegisterFields } from 'src/components';
import { SvgSelector } from 'src/ui';

import { ContentBox, Logo, Title, Wrapper } from './styled';

export const SignUp = () => {
  return (
    <Wrapper>
      <Logo>
        <SvgSelector name="logo" />
      </Logo>
      <ContentBox>
        <Title>Create an account</Title>
        <RegisterFields />
      </ContentBox>
    </Wrapper>
  );
};
