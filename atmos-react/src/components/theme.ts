import { LinkProps, Theme } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import { CSSProperties } from 'react';
import LinkComponent from './common/LinkComponent';
import NavLinkComponent from './common/NavLinkComponent';

const theme = createTheme({
  palette: { mode: 'dark' },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'url("stars.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '500px',
          overflowX: 'hidden',
        } as CSSProperties,
      },
    },
    MuiLink: { defaultProps: { component: LinkComponent } as LinkProps },
    MuiListItemButton: { defaultProps: { LinkComponent: NavLinkComponent } },
  },
});

export default theme;

export const heightWithoutBar = (t: Theme) => {
  const { toolbar } = t.mixins;
  const styles: CSSProperties = ({
    height: `calc(100vh - ${toolbar.minHeight}px)`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [`${t.breakpoints.up('xs')} and (orientation: landscape)`]: { height: `calc(100vh - ${(toolbar[t.breakpoints.up('xs')] as any)['@media (orientation: landscape)'].minHeight}px)` },
    [`${t.breakpoints.up('sm')}`]: { height: `calc(100vh - ${(toolbar[t.breakpoints.up('sm')] as CSSProperties).minHeight}px)` },
  });
  return styles;
};
