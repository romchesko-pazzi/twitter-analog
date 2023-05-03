import React from 'react';
import { footerText } from 'src/constants';

import { Main, Text } from './styled';

export const Footer = () => {
  return (
    <Main>
      {footerText.map(text => (
        <Text key={text}>{text}</Text>
      ))}
    </Main>
  );
};
