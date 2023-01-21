import { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useLocalStorageState from 'use-local-storage-state';
import SpotifyContext from './SpotifyContext';
import SpotifyCredentials from './SpotifyCredentials';
import useSpotifyBase from './useSpotifyStatic';

const useSpotify = () => {
  const { api, credentials, setCredentials } = useContext(SpotifyContext);
  const {
    redirectWithImplicitGrantFlow,
    getImplicitGrantUrl,
  } = useSpotifyBase(credentials);
  const [accessTokenStorage, setAccessTokenStorage] = useLocalStorageState<string>('accessToken');

  const initialise = async (creds: SpotifyCredentials) => {
    setCredentials(creds);
    const {
      redirectWithImplicitGrantFlow: redirect,
      validateAccessToken: validate,
    } = useSpotifyBase(creds);
    if (accessTokenStorage && accessTokenStorage.length)
    // eslint-disable-next-line nonblock-statement-body-position
      if (await validate(accessTokenStorage)) api.setAccessToken(accessTokenStorage);
      else redirect();
  };

  const setAccessToken = (accessToken: string) => {
    setAccessTokenStorage(accessToken);
    api.setAccessToken(accessToken);
  };

  return { api, initialise, redirectWithImplicitGrantFlow, getImplicitGrantUrl, setAccessToken };
};

export default useSpotify;
