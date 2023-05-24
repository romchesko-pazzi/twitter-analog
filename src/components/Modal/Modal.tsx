import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import { BlueButton } from 'src/ui';

import { Input, Main, OnCloseBox, Overlay, Subtitle, TextBlock, Title } from './styled';

export const Modal = ({ isOpen, onClose, confirmationObject }: IModal) => {
  const [codeFromPhone, setCodeFromPhone] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCodeFromPhone(event.target.value);
  };

  const sendCode = async () => {
    onClose();
    await confirmationObject.confirm(codeFromPhone);
  };

  const intercept = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return isOpen
    ? createPortal(
        <OnCloseBox onClick={onClose}>
          <Overlay />
          <Main onClick={intercept}>
            <TextBlock>
              <Title>Мы отправили вам код</Title>
              <Subtitle>Введите код в расположенном ниже поле для подтверждения</Subtitle>
            </TextBlock>
            <Input
              value={codeFromPhone}
              onChange={onChangeHandler}
              hasError={false}
              placeholder="Проверочный код"
            />
            <BlueButton callback={sendCode} isDisabled={false} title="Send" />
          </Main>
        </OnCloseBox>,
        document.getElementById('portal')!,
      )
    : null;
};

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  confirmationObject: any;
}
