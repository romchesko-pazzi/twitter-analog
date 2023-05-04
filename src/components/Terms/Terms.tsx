import React from 'react';
import { path } from 'src/types';

import { BlueText, Description, LinkToLogin, Main, Text } from './styled';

export const Terms = () => {
  return (
    <Main>
      <Text>
        By singing up you agree to the <BlueText>Terms of Service</BlueText> and{' '}
        <BlueText>Privacy Policy,</BlueText> including <BlueText>Cookie Use.</BlueText>
      </Text>
      <Description>
        Already have an account? <LinkToLogin to={path.login}>Log in</LinkToLogin>
      </Description>
    </Main>
  );
};
