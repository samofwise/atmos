import HeaderNav from './HeaderNav/HeaderNav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Playlists from './Playlists/Playlists';
import PlaylistEdit from './Playlists/PlaylistEdit';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

const router = createBrowserRouter([
  { path: "/", element: <Playlists /> },
  { path: "/playlists/:id", element: <PlaylistEdit /> },
]);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HeaderNav />
    <RouterProvider {...{ router }} />
  </ThemeProvider>
);

export default App;
