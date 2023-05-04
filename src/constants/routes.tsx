import { Login, SignUp } from 'src/pages';
import { path } from 'src/types';

export const routes = [
  { path: path.signUp, component: <SignUp /> },
  { path: path.login, component: <Login /> },
];
