import { SwipeableDrawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, ListItemProps } from '@mui/material';
import React, { useContext } from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { Auth } from 'aws-amplify';
import AuthContext from '../contexts/AuthContext';
import { styled } from '@mui/system';
import { Logout } from '@mui/icons-material';
import NavLinkComponent from '../common/NavLinkComponent';

interface Props {
  navShow: boolean;
  setNavShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ navShow, setNavShow }: Props) => {
  const auth = useContext(AuthContext)
  const setNav = (state: boolean) => () => setNavShow(state);
  const signOut = () => Auth.signOut();

  return (
    <SwipeableDrawer anchor='left' open={navShow} onClose={setNav(false)} onOpen={setNav(true)}>
      <Box sx={{width: 'auto', height:'100%'}} role="presentation" onClick={setNav(false)} onKeyDown={setNav(false)} >
        <List sx={{display:'flex', flexDirection:'column', height:'100%'}}>
          {navItems.map((item, i) =>
            ('isDivider' in item ? <Divider key={new Date().getTime()} /> : <NavItem key={i} {...item} />)
          )}
          {auth?.authenticated && <SignOut icon={<Logout />} text="Sign Out" onClick={signOut} />}
        </List>
      </Box>
    </SwipeableDrawer>
  )
}

const navItems = [
  { text: 'Playlists', url: '/', icon: <MailIcon /> },
  { text: 'Community Playlists', url: '/community', icon: <InboxIcon /> },
  { isDivider: true },
]

export default Nav;

interface NavItemProps {
  key?: number;
  text: string;
  url?: string;
  icon: JSX.Element;
}

const NavItem = ({url, icon, text, ...props}: NavItemProps & ListItemProps) => (
  <ListItem {...props} disablePadding>
    <ListItemButton component={NavLinkComponent} to={url || ""}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
)

const SignOut = styled(NavItem)({
  marginTop: 'auto'
})