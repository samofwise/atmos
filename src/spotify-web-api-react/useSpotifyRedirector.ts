import { useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import useSpotify from './useSpotify';

const useSpotifyRedirector = () => {
  const { redirectWithImplicitGrantFlow } = useSpotify();
  const [accessTokenStorage] = useLocalStorageState<string>('accessToken');
  const [accessTokenExpiry] = useLocalStorageState<string>('accessTokenExpiry');

  useEffect(() => {
    if (accessTokenStorage && accessTokenExpiry
      && Date.now() > (new Date(accessTokenExpiry).getTime() - getMinutes(59))) (
      redirectWithImplicitGrantFlow()
    );
  }, []);
};

const getMinutes = (minutes: number) => minutes * 60 * 1000;

export default useSpotifyRedirector;
