import React from 'react';
import { IBlueButton } from 'src/interfaces/buttons';

import { Box, Title } from './styled';

export const BlueButton = ({ title }: IBlueButton) => {
  return (
    <Box>
      <Title>{title}</Title>
    </Box>
  );
};
