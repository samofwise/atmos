import { createContext, useEffect, useMemo } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import useLocalStorageState from 'use-local-storage-state';
import SpotifyCredentials from './SpotifyCredentials';

interface ContextModel {
  api: SpotifyWebApi.SpotifyWebApiJs
  credentials: SpotifyCredentials
}

const SpotifyContext = createContext({} as ContextModel);

interface Props {
  children?: React.ReactNode,
  credentials: SpotifyCredentials
}

export function SpotifyProvider({ children, credentials }: Props) {
  const [accessTokenStorage, setAccessTokenStorage] = useLocalStorageState<string>('accessToken');

  const api = useMemo(() => (new SpotifyWebApi()), []);
  const model = useMemo(
    () => ({ api, credentials }),
    [api, credentials],
  );

  useEffect(() => {
    if (accessTokenStorage) api.setAccessToken(accessTokenStorage);
  }, [accessTokenStorage]);

  return (
    <SpotifyContext.Provider value={model}>
      {children}
    </SpotifyContext.Provider>
  );
}

export default SpotifyContext;
