import { Typography } from '@mui/material'
import { useContext } from 'react'
import ShowSignInContext from '../contexts/ShowSignInContext';
import AuthContext from '../contexts/AuthContext';

const AuthSection = () => {
  const {setshowSignIn: setsignIn} = useContext(ShowSignInContext)
  const auth = useContext(AuthContext)

  const clickSignIn = () => setsignIn(true);

  return auth !== null ? (
    !auth.authenticated ? 
    <Typography variant="h6" component="div" onClick={clickSignIn}>Sign In</Typography>
    :<Typography variant="subtitle2" component="div">{`Welcome ${auth.name}`}</Typography>
    
  ) : null
}

export default AuthSection