import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginFields } from 'src/interfaces';
import { path } from 'src/types';
import { BlueButton } from 'src/ui';
import { login } from 'src/utils';

import {
  EmailPhone,
  EmailPhoneLabel,
  LinkToSignUp,
  Password,
  PasswordLabel,
} from './styled';

export const LoginFields = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginFields>({
    mode: 'onBlur',
    resolver: yupResolver(login),
  });
  const onSubmit = (data: ILoginFields) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailPhone
        hasError={!!errors.emailPhone?.message}
        placeholder="Phone number, email address"
        {...register('emailPhone')}
      />
      <EmailPhoneLabel>{errors.emailPhone?.message}</EmailPhoneLabel>
      <Password
        hasError={!!errors.password?.message}
        placeholder="Password"
        {...register('password')}
      />
      <PasswordLabel>{errors.password?.message}</PasswordLabel>
      <BlueButton isDisabled={!isValid} title="Log in" type="submit" />
      <LinkToSignUp to={path.signUpBigPicture}>Sign up to Twitter</LinkToSignUp>
    </form>
  );
};
