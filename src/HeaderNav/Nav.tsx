import { SwipeableDrawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

interface Props {
  navShow: boolean;
  setNavShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ navShow, setNavShow }: Props) => {
  const setNav = (state: boolean) => () => setNavShow(state);
  return (
    <SwipeableDrawer anchor='left' open={navShow} onClose={setNav(false)} onOpen={setNav(true)}>
      <Box sx={{ width: 'auto' }} role="presentation" onClick={setNav(false)} onKeyDown={setNav(false)} >
        <List>
          {navItems.map((item, i) =>
            ('isDivider' in item ? <Divider /> : <NavItem key={i} {...item} />)
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  )
}

const navItems = [
  { text: 'Inbox', url: '', icon: <MailIcon /> },
  { text: 'Starred', url: '', icon: <InboxIcon /> },
  { text: 'Send email', url: '', icon: <MailIcon /> },
  { isDivider: true },
  { text: 'All mail', url: '', icon: <InboxIcon /> },
  { text: 'Trash', url: '', icon: <MailIcon /> }
]

export default Nav;

interface NavItemProps {
  key: number;
  text: string;
  url: string;
  icon: JSX.Element;
}

const NavItem = ({ text, url, icon }: NavItemProps) => (
  <ListItem key={text} disablePadding>
    <ListItemButton>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
)

