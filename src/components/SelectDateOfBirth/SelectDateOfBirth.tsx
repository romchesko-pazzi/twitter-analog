import React, { useState } from 'react';
import { ISelectDateOfBirth } from 'src/interfaces';
import { InputSelectName, Months } from 'src/types';
import { SvgSelector } from 'src/ui';

import { Main, Option, Options, SelectBox, SvgBox, Value } from './styled';

export const SelectDateOfBirth = ({ items, title, setValue }: ISelectDateOfBirth) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localTitle, setLocalTitle] = useState<Months | number | InputSelectName>(title);

  const toggleDropDown = () => setIsOpen(!isOpen);
  const onBlurHandler = () => setIsOpen(false);

  const selectDate = (date: Months | number, name: InputSelectName) => () => {
    setLocalTitle(date);
    setIsOpen(false);
    setValue(name, date);
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
            <Option key={item} onClick={selectDate(item, title)}>
              {item}
            </Option>
          ))}
        </Options>
      </SelectBox>
    </Main>
  );
};
