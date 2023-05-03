import React from 'react';
import { Footer, SignUpButtons, Terms } from 'src/components';
import { SvgSelector } from 'src/ui';

import { Logo, Main, SubTitle, Title, TopContent } from './styled';

export const SignUpBigPicture = () => {
  return (
    <Main>
      <TopContent>
        <img alt="twitter-pic" src="src/assets/images/picture-1.jpg" />
        <div>
          <Logo>
            <SvgSelector name="logo" />
          </Logo>
          <Title>Happening now</Title>
          <SubTitle>Join Twitter today</SubTitle>
          <SignUpButtons />
          <Terms />
        </div>
      </TopContent>
      <Footer />
    </Main>
  );
};
