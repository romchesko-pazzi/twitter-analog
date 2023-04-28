import React from 'react';
import { Logo, Vector } from 'src/assets/svg';
import { Svg } from 'src/types';

export const SvgSelector = ({ name }: { name: Svg }) => {
  switch (name) {
    case 'logo':
      return <Logo />;
    case 'vector':
      return <Vector />;
    default:
      return <svg />;
  }
};