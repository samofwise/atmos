import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import SignIn from './SignIn';
import AuthContext from '../../contexts/AuthContext';
import AppName from '../common/AppName';

function HeaderNav() {
  // const { authenticated } = useContext(AuthContext) ?? {};
  const [navShow, setNavShow] = useState(false);
  const toggleNav = () => setNavShow((s) => !s);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {/* {authenticated */}
          {/* && ( */}
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleNav}>
            <MenuIcon />
          </IconButton>
          <Button component={Link} to="/asdkfjh" disableRipple sx={{ minHeight: 'inherit' }}>
            <AppName variant="h6" component="h1" />
          </Button>
          <SignIn />
        </Toolbar>
      </AppBar>
      <Nav {...{ navShow, setNavShow }} />
    </>
  );
}

export default HeaderNav;
