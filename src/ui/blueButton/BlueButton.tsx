import React from 'react';
import { IBlueButton } from 'src/interfaces';

import { Box, Title } from './styled';

export const BlueButton = ({ title, type, isDisabled }: IBlueButton) => {
  return (
    <Box disabled={isDisabled} type={type}>
      <Title>{title}</Title>
    </Box>
  );
};
