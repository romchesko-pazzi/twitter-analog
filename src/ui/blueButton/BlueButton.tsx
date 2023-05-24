import React from 'react';
import { IBlueButton } from 'src/interfaces';

import { Box, Title } from './styled';

export const BlueButton = ({ title, type, isDisabled, id, callback }: IBlueButton) => {
  return (
    <Box id={id} disabled={isDisabled} type={type} onClick={callback}>
      <Title>{title}</Title>
    </Box>
  );
};
