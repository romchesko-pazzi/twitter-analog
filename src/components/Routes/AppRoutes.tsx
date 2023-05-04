import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'src/constants';
import { SignUpBigPicture } from 'src/pages';
import { path } from 'src/types';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={path.signUpBigPicture} element={<SignUpBigPicture />} />
      {routes.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}
    </Routes>
  );
};
