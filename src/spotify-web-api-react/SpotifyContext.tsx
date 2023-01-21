import { createContext, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import SpotifyWebApi from 'spotify-web-api-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import SpotifyCredentials from './SpotifyCredentials';

interface ContextModel {
  api: SpotifyWebApi.SpotifyWebApiJs
  credentials: SpotifyCredentials
  setCredentials: React.Dispatch<React.SetStateAction<SpotifyCredentials>>
}

const SpotifyContext = createContext({} as ContextModel);

export function SpotifyProvider({ children }: { children?: React.ReactNode }) {
  const [credentials, setCredentials] = useState({} as SpotifyCredentials);
  const api = useMemo(() => (new SpotifyWebApi()), []);
  const model = useMemo(
    () => ({ api, credentials, setCredentials }),
    [credentials, setCredentials],
  );

  return (
    <SpotifyContext.Provider value={model}>
      {children}
    </SpotifyContext.Provider>
  );
}

export default SpotifyContext;
