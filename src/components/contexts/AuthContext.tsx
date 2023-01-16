import { Auth } from "aws-amplify";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthModel|null>(null);

interface AuthModel {
  authenticated: boolean;
  name: string;
}

export const AuthContextProvider = ({children}: {children?: React.ReactNode}) => {
  const [authModel, setAuthModel] = useState<AuthModel|null>(null);

  useEffect(() => {
    Auth.currentCredentials().then(c => setAuthModel(m => ({...(m as AuthModel), authenticated: c.authenticated })));
    Auth.currentUserInfo().then(i => setAuthModel(m => ({...(m as AuthModel), name: i?.name?? 'Coolio Person' })));
  }, [])

  return (
    <AuthContext.Provider value={authModel}>
      {children}
    </AuthContext.Provider>)
}

export default AuthContext
