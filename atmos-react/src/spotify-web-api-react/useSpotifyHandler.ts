import queryString from 'query-string';
import { useCallback, useEffect, useMemo } from 'react';
import { useSpotifyPlayer } from 'react-spotify-web-playback-sdk';
import useLocalStorageState from 'use-local-storage-state';
import useSpotify from './useSpotify';

const useSpotifyHandler = (redirect?: 'off' | 'alert') => {
  const { credentials, redirectWithImplicitGrantFlow, setAccessToken } = useSpotify();
  // const player = useSpotifyPlayer();
  const { hash, pathname } = useMemo(() => window.location, [window.location]);
  const [accessTokenStorage] = useLocalStorageState<string>('accessToken');
  const [accessTokenExpiry] = useLocalStorageState<string>('accessTokenExpiry');

  const handleReceiver = useCallback(
    () => {
      const { error, accessToken, expiresIn, state } = getResponse(hash);
      if (error) throw new Error(error as string ?? 'Spotify Error');
      else if (accessToken) {
        setAccessToken(accessToken, expiresIn);
        const redirectUrl = state?.includes(window.location.hostname) ? state as string : '';
        window.location.href = redirectUrl;
      } else window.location.href = '/';
    },
    [hash],
  );

  const doRedirect = useCallback(() => {
    if (redirect === undefined || (redirect === 'alert'
    // eslint-disable-next-line no-alert, no-restricted-globals
     && confirm('Your Spotify Connection has expired, do you want to refresh it now?'))) redirectWithImplicitGrantFlow();
  }, [redirect]);

  const handleRedirector = useCallback(
    () => {
      if (redirect !== 'off' && accessTokenStorage && accessTokenExpiry) {
        const timeUntilExpiry = new Date(accessTokenExpiry).getTime() - getMinutes(5) - Date.now();

        if (accessTokenStorage && accessTokenExpiry && timeUntilExpiry <= 0)(
          doRedirect()
        );
        else setTimeout(doRedirect, timeUntilExpiry);
      }
    },
    [accessTokenStorage, accessTokenExpiry],
  );

  useEffect(() => {
    if (pathname === credentials.redirectUri) handleReceiver();
    else handleRedirector();
  }, []);
};

const getResponse = (hash: string) => {
  const {
    error,
    access_token: accessToken,
    // token_type,
    expires_in: expiresIn,
    state,
  } = queryString.parse(hash, { parseNumbers: true });

  return {
    error,
    accessToken: accessToken as string,
    expiresIn: expiresIn as number,
    state: state as string,
  };
};

const getMinutes = (minutes: number) => minutes * 60 * 1000;

export default useSpotifyHandler;
