import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/react-hook-form-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from 'src/firebase';
import { Modal, SelectDateOfBirth } from 'src/components';
import { days, months, years } from 'src/constants';
import { IAuthFields } from 'src/interfaces';
import { path } from 'src/types';
import { BlueButton, SignUpDescription } from 'src/ui';
import { signUp } from 'src/utils';

import {
  BirthdayInput,
  Input,
  NameErrorLabel,
  PhoneErrorLabel,
  PhoneInputWrapper,
  UseEmail,
} from './styled';

export const RegisterFields = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [confirmationObject, setConfirmationObject] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<IAuthFields>({
    mode: 'onBlur',
    resolver: yupResolver(signUp),
  });
  const selectedDateOfBirth = watch(['Month', 'Day', 'Year']);

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-btn',
      { size: 'invisible' },
      auth,
    );
  };

  const onSubmit = async (data: IAuthFields) => {
    setUpRecaptcha();
    const { phoneNumber } = data;

    try {
      const response = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier,
      );

      setConfirmationObject(response);
      setIsModalOpen(true);
    } catch (error: unknown) {
      const syntaxError = error as SyntaxError;

      console.log(syntaxError.message);
    }
  };
  const toggle = () => setIsModalOpen(!isModalOpen);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        hasError={!!errors.name?.message}
        id="name"
        placeholder="Name"
        {...register('name')}
      />
      <NameErrorLabel htmlFor="name">{errors.name?.message}</NameErrorLabel>
      <PhoneInputWrapper hasError={!!errors.phoneNumber?.message}>
        <PhoneInput placeholder="Phone number" name="phoneNumber" control={control} />
      </PhoneInputWrapper>
      <PhoneErrorLabel htmlFor="phone">{errors.phoneNumber?.message}</PhoneErrorLabel>
      <UseEmail to={path.signUpBigPicture}>Use email</UseEmail>
      <SignUpDescription />
      <BirthdayInput>
        <SelectDateOfBirth setValue={setValue} title="Month" items={months} />
        <SelectDateOfBirth setValue={setValue} title="Day" items={days} />
        <SelectDateOfBirth setValue={setValue} title="Year" items={years} />
      </BirthdayInput>
      <BlueButton
        id="recaptcha-btn"
        isDisabled={selectedDateOfBirth.includes(undefined) || !isValid}
        title="Next"
        type="submit"
      />
      <Modal
        confirmationObject={confirmationObject}
        onClose={toggle}
        isOpen={isModalOpen}
      />
    </form>
  );
};
