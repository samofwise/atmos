import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


import { useState } from 'react'
import Nav from './Nav';

const HeaderNav = () => {
  const [navShow, setNavShow] = useState(false);
  const toggleNav = () => setNavShow(s => !s);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleNav}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Atmos
          </Typography>
        </Toolbar>
      </AppBar>
      <Nav {...{ navShow, setNavShow }} />
    </>
  )
}

export default HeaderNav