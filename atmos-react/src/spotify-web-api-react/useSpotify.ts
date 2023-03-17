import { useCallback, useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useLocalStorageState from 'use-local-storage-state';
import SpotifyContext from './SpotifyContext';
import useSpotifyBase from './useSpotifyBase';

const useSpotify = () => {
  const { api, credentials } = useContext(SpotifyContext);
  const {
    redirectWithImplicitGrantFlow,
    getImplicitGrantUrl,
  } = useSpotifyBase(credentials);
  const [accessTokenStorage, setAccessTokenStorage] = useLocalStorageState<string>('accessToken');
  const setAccessTokenExpiry = useLocalStorageState<Date>('accessTokenExpiry')[1];

  const setAccessToken = (accessToken: string, expiresIn: number) => {
    setAccessTokenStorage(accessToken);
    setAccessTokenExpiry(new Date(Date.now() + (expiresIn * 1000)));
    api.setAccessToken(accessToken);
  };

  const getAccessToken = useCallback(
    (callback: (token: string) => void) => callback(accessTokenStorage as string),
    [accessTokenStorage],
  );

  return {
    api,
    credentials,
    redirectWithImplicitGrantFlow,
    getImplicitGrantUrl,
    setAccessToken,
    getAccessToken,
  };
};

export default useSpotify;
