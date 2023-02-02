import { useContext } from 'react';
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
  const [accessTokenExpiry, setAccessTokenExpiry] = useLocalStorageState<Date>('accessTokenExpiry');

  const setAccessToken = (accessToken: string, expiresIn: number) => {
    setAccessTokenStorage(accessToken);
    setAccessTokenExpiry(new Date(Date.now() + (expiresIn * 1000)));
    api.setAccessToken(accessToken);
  };

  return { api, redirectWithImplicitGrantFlow, getImplicitGrantUrl, setAccessToken };
};

export default useSpotify;
