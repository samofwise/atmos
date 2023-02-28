import queryString from 'query-string';
import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyCredentials from './SpotifyCredentials';

const spotifyAuthorizeEndpoint = 'https://accounts.spotify.com/authorize';

const useSpotifyBase = (credentials: SpotifyCredentials) => {
  const validateAccessToken = async (accessToken: string) => {
    try {
      const spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(accessToken);
      await spotifyApi.search('a', ['track']);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return false;
    }
  };

  const getImplicitGrantUrl = () => {
    if (!credentials.clientId || credentials.clientId === '') throw new Error('Client Id is null and it is required for Implicit Grant Flow');
    if (!credentials.scope || credentials.scope === '') throw new Error('Scope is null and it is required for Implicit Grant Flow');
    if (!credentials.redirectUri || credentials.redirectUri === '') throw new Error('Redirect Uri Id is null and it is required for Implicit Grant Flow');

    return queryString.stringifyUrl({
      url: spotifyAuthorizeEndpoint,
      query: {
        response_type: 'token',
        client_id: credentials.clientId,
        scope: credentials.scope,
        redirect_uri: `${window.location.origin}${credentials.redirectUri}`,
        state: window.location.href,
      },
    });
  };

  const redirectWithImplicitGrantFlow = () => {
    const url = getImplicitGrantUrl();
    // eslint-disable-next-line no-console
    console.log(`Redirecting to ${url}`, 'implicit grant');
    window.location.href = url;
  };

  return { validateAccessToken, getImplicitGrantUrl, redirectWithImplicitGrantFlow };
};

export default useSpotifyBase;
