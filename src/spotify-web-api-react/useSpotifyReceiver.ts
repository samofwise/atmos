import queryString from 'query-string';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSpotify from './useSpotify';

const useSpotifyReceiver = (onError?: (message: string) => void) => {
  const { setAccessToken } = useSpotify();
  const { hash } = useLocation();

  useEffect(() => {
    const response = queryString.parse(hash);
    if (response.error) {
      onError?.(response.error as string);
      throw new Error(response.error as string ?? 'Spotify Error');
    } else if (response.access_token) {
      const accessToken = response.access_token as string;
      // const tokenType = response.token_type as string;
      const expiresIn = parseInt(response.expires_in as string, 10);
      const { state } = response;
      setAccessToken(accessToken, expiresIn);

      const redirectUrl = state?.includes(window.location.hostname) ? state as string : '';
      window.location.href = redirectUrl;
    } else window.location.href = '/';
  }, []);
};

export default useSpotifyReceiver;
