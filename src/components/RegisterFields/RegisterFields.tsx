import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SelectDateOfBirth } from 'src/components';
import { days, months, years } from 'src/constants';
import { IAuthFields } from 'src/interfaces';
import { BlueButton, SignUpDescription } from 'src/ui';
import { auth } from 'src/utils';

import {
  BirthdayInput,
  Input,
  NameErrorLabel,
  PhoneErrorLabel,
  UseEmail,
} from './styled';

export const RegisterFields = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthFields>({
    mode: 'onBlur',
    resolver: yupResolver(auth),
  });

  const onSubmit = (data: IAuthFields) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        hasError={!!errors.name?.message}
        id="name"
        placeholder="Name"
        {...register('name')}
      />
      <NameErrorLabel htmlFor="name">{errors.name?.message}</NameErrorLabel>
      <Input
        hasError={!!errors.phoneNumber?.message}
        placeholder="Phone number"
        {...register('phoneNumber')}
      />
      <PhoneErrorLabel htmlFor="phone">{errors.phoneNumber?.message}</PhoneErrorLabel>
      <UseEmail to="/">Use email</UseEmail>
      <SignUpDescription />
      <BirthdayInput>
        <SelectDateOfBirth title="Month" items={months} />
        <SelectDateOfBirth title="Day" items={days} />
        <SelectDateOfBirth title="Year" items={years} />
      </BirthdayInput>
      <BlueButton title="Next" type="submit" />
    </form>
  );
};
