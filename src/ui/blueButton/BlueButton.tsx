import React from 'react';
import { IBlueButton } from 'src/interfaces';

import { Box, Title } from './styled';

export const BlueButton = ({ title, type }: IBlueButton) => {
  return (
    <Box type={type}>
      <Title>{title}</Title>
    </Box>
  );
};
