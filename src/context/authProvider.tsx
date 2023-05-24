import React, { createContext, ReactNode, useMemo, useState } from 'react';
import { signInWithPopup } from '@firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from 'src/firebase';

export const AuthContext = createContext(null as any);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser] = useState();

  const signUp = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error: unknown) {
      const syntaxError = error as SyntaxError;

      console.log(syntaxError.message);
    }
  };

  const value = useMemo(() => {
    return {
      currentUser,
      signUp,
    };
  }, [currentUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
