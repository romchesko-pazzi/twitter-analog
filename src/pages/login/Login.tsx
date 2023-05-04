import React from 'react';
import { LoginFields } from 'src/components';
import { SvgSelector } from 'src/ui';

import { Logo, Main, Title } from './styled';

export const Login = () => {
  return (
    <Main>
      <Logo>
        <SvgSelector name="logo" />
      </Logo>
      <Title>Log in to Twitter</Title>
      <LoginFields />
    </Main>
  );
};
