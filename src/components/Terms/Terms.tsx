import React from 'react';

import { BlueText, LinkToLogin, Main, Text } from './styled';

export const Terms = () => {
  return (
    <Main>
      <Text>
        By singing up you agree to the <BlueText>Terms of Service</BlueText> and{' '}
        <BlueText>Privacy Policy,</BlueText> including <BlueText>Cookie Use.</BlueText>
      </Text>
      <LinkToLogin>
        Already have an account? <BlueText>Log in</BlueText>
      </LinkToLogin>
    </Main>
  );
};
