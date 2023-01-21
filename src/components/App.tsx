import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import PlaylistEdit from './Playlists/PlaylistEdit';
import theme from './theme';
import Home from './Home';
import Playlists from './Playlists/Playlists';
import { ShowSignInProvider } from '../contexts/ShowSignInContext';
import AuthContext, { AuthContextProvider } from '../contexts/AuthContext';
import CommunityPlaylists from './CommunityPlaylists/CommunityPlaylists';
import Root from './Root';
import { SpotifyProvider } from '../spotify-web-api-react/SpotifyContext';
import useSpotify from '../spotify-web-api-react/useSpotify';

function App() {
  const { authenticated } = useContext(AuthContext);
  const { initialise } = useSpotify();

  useEffect(() => {
    initialise({
      clientId: 'a35ad70cf30442f0a53ba22a95e85c8e',
      scope: 'user-read-private user-read-email user-read-recently-played user-read-playback-state user-modify-playback-state',
      redirectUri: 'http://localhost:3000',
    });
  }, []);

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
      <SpotifyProvider>
        <App />
      </SpotifyProvider>
    </AuthContextProvider>
  );
}

const StyledApp = styled(AppAuthWrapper)`
`;

export default StyledApp;
