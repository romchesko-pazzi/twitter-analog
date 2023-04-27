import React from 'react';
import { Logo, Vector } from 'src/assets/svg';
import { SvgType } from 'src/types';

export const SvgSelector = ({ name }: { name: SvgType }) => {
  switch (name) {
    case 'logo':
      return <Logo />;
    case 'vector':
      return <Vector />;
    default:
      return <svg />;
  }
};
