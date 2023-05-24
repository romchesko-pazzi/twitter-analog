import React from 'react';
import { useAuth } from 'src/hooks';
import { path } from 'src/types';
import { SvgSelector } from 'src/ui';

import { Buttons, ButtonText, EmailPhoneButton, GoogleButton } from './styled';

export const SignUpButtons = () => {
  const { currentUser, signUp } = useAuth();

  const signUpWithGoogle = () => signUp();

  return (
    <Buttons>
      <GoogleButton>
        <SvgSelector name="google" />
        <ButtonText onClick={signUpWithGoogle}>Sign up with Google</ButtonText>
      </GoogleButton>
      <EmailPhoneButton to={path.signUp}>
        <ButtonText>Sign up with phone or email</ButtonText>
      </EmailPhoneButton>
    </Buttons>
  );
};
