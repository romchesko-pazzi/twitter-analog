import React, { useState } from 'react';
import { ISelectDateOfBirth } from 'src/interfaces';
import { SvgSelector } from 'src/ui';

import { Main, Option, Options, SelectBox, SvgBox, Value } from './styled';

export const SelectDateOfBirth = ({ items, title }: ISelectDateOfBirth) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localTitle, setLocalTitle] = useState<string | number>(title);

  const toggleDropDown = () => setIsOpen(!isOpen);

  const onBlurHandler = () => {
    setIsOpen(false);
  };

  const selectDate = (date: string | number) => () => {
    setLocalTitle(date);
    setIsOpen(false);
  };

  return (
    <Main title={title} onBlur={onBlurHandler} tabIndex={0}>
      <SelectBox onClick={toggleDropDown}>
        <Value>{localTitle}</Value>
        <SvgBox>
          <SvgSelector name="vector" />
        </SvgBox>
        <Options display={isOpen ? 'block' : 'none'}>
          {items.map(item => (
            <Option key={item} onClick={selectDate(item)}>
              {item}
            </Option>
          ))}
        </Options>
      </SelectBox>
    </Main>
  );
};
