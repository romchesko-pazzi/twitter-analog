import React from 'react';
import { IBlueButton } from 'src/interfaces';

import { Box, Title } from './styled';

export const BlueButton = ({ title }: IBlueButton) => {
  return (
    <Box>
      <Title>{title}</Title>
    </Box>
  );
};
