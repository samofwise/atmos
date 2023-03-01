import { Auth } from 'aws-amplify';
import { createContext, useEffect, useState } from 'react';

interface AuthModel {
  isLoading: boolean;
  authenticated?: boolean;
  name?: string;
}

const defaultModel: AuthModel = { isLoading: true };

const AuthContext = createContext<AuthModel>(defaultModel);

export function AuthContextProvider({ children } : { children?: React.ReactNode }) {
  const [authModel, setAuthModel] = useState<AuthModel>(defaultModel);

  useEffect(() => {
    (async () => {
      const setAuthed = Auth.currentCredentials()
        .then((c) => setAuthModel((m) => ({
          ...(m as AuthModel),
          authenticated: c.authenticated,
        })));
      const setName = Auth.currentUserInfo()
        .then((i) => setAuthModel((m) => ({ ...(m as AuthModel), name: i?.attributes?.name })));

      await Promise.all([setAuthed, setName]);
      setAuthModel((m) => ({ ...(m as AuthModel), isLoading: false }));
    })();
  }, []);

  return (
    <AuthContext.Provider value={authModel}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
