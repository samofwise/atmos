import { createContext, useMemo, useState } from 'react';

interface SignInModel {
  showSignIn: boolean,
  setshowSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

const ShowSignInContext = createContext<SignInModel>((null as unknown) as SignInModel);

export function ShowSignInProvider({ children }: { children?: React.ReactNode }) {
  const [showSignIn, setshowSignIn] = useState(false);
  const value = useMemo(() => ({ showSignIn, setshowSignIn }), [showSignIn]);

  return (
    <ShowSignInContext.Provider value={value}>
      {children}
    </ShowSignInContext.Provider>
  );
}

export default ShowSignInContext;

// const Component = (props) => {
// const Component = (props) => {
// return <div />;
// };

// arrow function for named component
// const Component = (props) => {
//   return <div>{props.content}</div>;
// };
