import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { WebPlaybackSDK, WebPlaybackSDKProps } from 'react-spotify-web-playback-sdk';
import PlaylistEdit from './Playlists/PlaylistEdit';
import theme from './theme';
import { ShowSignInProvider } from '../contexts/ShowSignInContext';
import AuthContext, { AuthContextProvider } from '../contexts/AuthContext';
import CommunityPlaylists from './CommunityPlaylists/CommunityPlaylists';
import Root from './Root';
import { SpotifyProvider } from '../spotify-web-api-react/SpotifyContext';
import useSpotify from '../spotify-web-api-react/useSpotify';
import SpotifyAuthReceiver from '../spotify-web-api-react/SpotifyAuthReceiver';
import SpotifyCredentials from '../spotify-web-api-react/SpotifyCredentials';
import Playlists from './Playlists/Playlists';
import Home from './Home';
import useSpotifyRedirector from '../spotify-web-api-react/useSpotifyRedirector';

function App() {
  useSpotifyRedirector();
  const { authenticated } = useContext(AuthContext);
  const { api } = useSpotify();

  const SpotifySdk = WebPlaybackSDK as React.FC<React.PropsWithChildren<WebPlaybackSDKProps>>;

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = (event: Event) => {
    const target = event.target as Document | HTMLElement;
    const scrollTarget = 'scrollingElement' in target ? target.scrollingElement : target;
    const offsetX = 0.4 * -(scrollTarget?.scrollTop ?? 0);
    document.getElementsByTagName('body')[0].style.backgroundPositionX = `${offsetX}px`;
  };

  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        { path: '/', element: authenticated ? <Playlists /> : <Home /> },
        { path: '/auth/spotify', element: <SpotifyAuthReceiver /> },
        { path: '/community', element: <CommunityPlaylists /> },
        { path: '/playlists/:id', element: <PlaylistEdit /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <ShowSignInProvider>
        <CssBaseline />
        <SpotifySdk
          initialDeviceName="atmos Spotify"
          getOAuthToken={api.getAccessToken}
          initialVolume={0.5}
        >
          <RouterProvider {...{ router }} />
        </SpotifySdk>
      </ShowSignInProvider>
    </ThemeProvider>
  );
}

function AppAuthWrapper() {
  return (
    <AuthContextProvider>
      <SpotifyProvider credentials={credentials}>
        <App />
      </SpotifyProvider>
    </AuthContextProvider>
  );
}

const credentials: SpotifyCredentials = {
  clientId: 'a35ad70cf30442f0a53ba22a95e85c8e',
  scope: 'user-read-private user-read-email user-read-recently-played user-read-playback-state user-modify-playback-state',
  redirectUri: 'http://localhost:3000/auth/spotify/',
};

const StyledApp = styled(AppAuthWrapper)`
`;

export default StyledApp;
