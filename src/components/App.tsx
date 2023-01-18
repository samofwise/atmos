import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useContext } from 'react';
import styled from '@emotion/styled';
import PlaylistEdit from './Playlists/PlaylistEdit';
import theme from './theme';
import Home from './Home';
import Playlists from './Playlists/Playlists';
import { ShowSignInProvider } from './contexts/ShowSignInContext';
import AuthContext, { AuthContextProvider } from './contexts/AuthContext';
import CommunityPlaylists from './CommunityPlaylists/CommunityPlaylists';
import Root from './Root';

function App() {
  const { authenticated } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: authenticated ? <Playlists /> : <Home /> },
        { path: '/community', element: <CommunityPlaylists /> },
        { path: '/playlists/:id', element: <PlaylistEdit /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <ShowSignInProvider>
        <CssBaseline />
        <RouterProvider {...{ router }} />
      </ShowSignInProvider>
    </ThemeProvider>
  );
}

function AppAuthWrapper() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

const StyledApp = styled(AppAuthWrapper)`
`;

export default StyledApp;
