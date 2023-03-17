import { Button, styled, Typography } from '@mui/material';
import { useContext } from 'react';
import ShowSignInContext from '../../contexts/ShowSignInContext';
import AuthContext from '../../contexts/AuthContext';

// eslint-disable  @typescript-eslint/no-explicit-any 
function SignIn(props: any) {
  const { setshowSignIn: setsignIn } = useContext(ShowSignInContext);
  const { authenticated, name } = useContext(AuthContext);

  const clickSignIn = () => setsignIn(true);

  if (authenticated) return <Typography {...props} variant="subtitle2" component="div">{`Welcome ${name}`}</Typography>;
  if (authenticated === undefined) return (
    <Button {...props}>
      <Typography variant="h6" component="span" onClick={clickSignIn}>Sign In</Typography>
    </Button>
  );
  return null;
}

const StyledSignIn = styled(SignIn)`
  margin-left: auto
`;

export default StyledSignIn;
