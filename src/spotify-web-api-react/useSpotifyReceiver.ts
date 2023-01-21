import queryString from 'query-string';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSpotify from './useSpotify';

const useSpotifyReceiver = (onError?: (message: string) => void) => {
  const navigate = useNavigate();
  const { setAccessToken } = useSpotify();
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const response = queryString.parse(hash);
    if (response.error) {
      onError?.(response.error as string);
      throw new Error(response.error as string ?? 'Spotify Error');
    } else if (response.access_token) {
      const accessToken = response.access_token as string;
      // const tokenType = response.token_type as string;
      // const expiresIn = response.expires_in as string;
      // const { state } = response;
      setAccessToken(accessToken);

      navigate(pathname.replace(hash, ''), { replace: true });
    }
  }, []);
};

export default useSpotifyReceiver;
