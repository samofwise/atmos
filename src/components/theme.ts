import { LinkProps } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import LinkComponent from './common/LinkComponent';
import NavLinkComponent from './common/NavLinkComponent';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkComponent,
      } as LinkProps,
    },
    MuiListItemButton: {
      defaultProps: {
        LinkComponent: NavLinkComponent,
      },
    },
  },
});

export default theme;
