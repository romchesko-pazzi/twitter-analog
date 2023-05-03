import React from 'react';
import { SvgSelector } from 'src/ui';

import { Buttons, ButtonText, EmailPhoneButton, GoogleButton } from './styled';

export const SignUpButtons = () => {
  return (
    <Buttons>
      <GoogleButton>
        <SvgSelector name="google" />
        <ButtonText>Sign up with Google</ButtonText>
      </GoogleButton>
      <EmailPhoneButton>
        <ButtonText>Sign up with phone or email</ButtonText>
      </EmailPhoneButton>
    </Buttons>
  );
};
