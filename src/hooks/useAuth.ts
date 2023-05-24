import { useContext } from 'react';
import { AuthContext } from 'src/context/authProvider';

export const useAuth = () => useContext(AuthContext);
