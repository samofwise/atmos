import { Typography } from '@mui/material';
import { useContext } from 'react';
import ShowSignInContext from '../contexts/ShowSignInContext';
import AuthContext from '../contexts/AuthContext';

function AuthSection() {
  const { setshowSignIn: setsignIn } = useContext(ShowSignInContext);
  const { authenticated, name } = useContext(AuthContext);

  const clickSignIn = () => setsignIn(true);

  if (authenticated) return <Typography variant="subtitle2" component="div">{`Welcome ${name}`}</Typography>;
  if (authenticated !== undefined) return <Typography variant="h6" component="div" onClick={clickSignIn}>Sign In</Typography>;
  return null;
}

export default AuthSection;
