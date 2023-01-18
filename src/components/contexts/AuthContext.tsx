import { Auth } from 'aws-amplify';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext<AuthModel>({});

interface AuthModel {
  authenticated?: boolean;
  name?: string;
}

export function AuthContextProvider({ children }: { children?: React.ReactNode }) {
  const [authModel, setAuthModel] = useState<AuthModel>({});

  useEffect(() => {
    Auth.currentCredentials()
      .then((c) => setAuthModel((m) => ({ ...(m as AuthModel), authenticated: c.authenticated })));
    Auth.currentUserInfo()
      .then((i) => setAuthModel((m) => ({ ...(m as AuthModel), name: i?.attributes?.name })));
  }, []);

  return (
    <AuthContext.Provider value={authModel}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
