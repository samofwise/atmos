import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import Nav from './Nav';
import AuthSection from './SignIn';
import AuthContext from '../contexts/AuthContext';
import AppName from '../common/AppName';

function HeaderNav() {
  const { authenticated } = useContext(AuthContext) ?? {};
  const [navShow, setNavShow] = useState(false);
  const toggleNav = () => setNavShow((s) => !s);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {authenticated
          && (
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleNav}>
            <MenuIcon />
          </IconButton>
          )}
          <AppName variant="h6" component="h1" sx={{ flexGrow: 1 }} />
          <AuthSection />
        </Toolbar>
      </AppBar>
      <Nav {...{ navShow, setNavShow }} />
    </>
  );
}

export default HeaderNav;
