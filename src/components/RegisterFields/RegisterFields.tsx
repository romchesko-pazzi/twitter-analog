import React from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/react-hook-form-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SelectDateOfBirth } from 'src/components';
import { days, months, years } from 'src/constants';
import { IAuthFields } from 'src/interfaces';
import { path } from 'src/types';
import { BlueButton, SignUpDescription } from 'src/ui';
import { auth } from 'src/utils';

import {
  BirthdayInput,
  Input,
  NameErrorLabel,
  PhoneErrorLabel,
  PhoneInputWrapper,
  UseEmail,
} from './styled';

export const RegisterFields = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<IAuthFields>({
    mode: 'onBlur',
    resolver: yupResolver(auth),
  });
  const selectedDateOfBirth = watch(['Month', 'Day', 'Year']);
  const onSubmit = (data: IAuthFields) => {};

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
        isDisabled={selectedDateOfBirth.includes(undefined) || !isValid}
        title="Next"
        type="submit"
      />
    </form>
  );
};
