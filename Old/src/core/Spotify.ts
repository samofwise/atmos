import QueryString from 'query-string'
import LocalStorageStore from './LocalStorageStore';
import SpotifyWebApi from 'spotify-web-api-js';


export default class Spotify {
	private static readonly clientId = 'a0296308782b463c89cf3b0225b6a303';
	private static readonly authorizationEndpoint = 'https://accounts.spotify.com/authorize';
	private static readonly scopes = ['user-read-private', 'user-read-email', 'user-read-recently-played', 'user-read-playback-state','user-modify-playback-state']
	private static readonly state = 'blah'

	static Api: SpotifyWebApi.SpotifyWebApiJs;

	static async initialise() {
		if (!this.Api)
			this.Api = new SpotifyWebApi()

		const returning = this.parseTokenReturn();


		const token = await this.getAccessToken();
		if (token) {
			this.Api.setAccessToken(token);
		}
		else if (returning == null) {
			const redirectUri = window.location.href;
			this.redirectToAuth(redirectUri);
		}
		else {
			alert('Spotify access failed')
		}
	}

	private static async getAccessToken(): Promise<string> {
		const token = LocalStorageStore.getAccessToken();
		return token && await this.validateToken(token) ? token : null;
	}

	private static redirectToAuth(redirectUri: string) {
		const query = {
			client_id: this.clientId,
			redirect_uri: redirectUri,
			scope: this.scopes.join(' '),
			response_type: 'token',
			state: this.state
		}

		const authUri = `${this.authorizationEndpoint}?${QueryString.stringify(query)}`
		window.location.replace(authUri);
	}

	private static async validateToken(token: string) {
		const spotifyApi = new SpotifyWebApi();
		spotifyApi.setAccessToken(token)
		try {
			await spotifyApi.searchTracks('a');
			return true;
		}
		catch (e) {
			return false;
		}
	}

	private static parseTokenReturn() {
		const data = QueryString.parse(window.location.hash);
		const isSpotifyReturn = data.access_token && data.token_type || data.error
		if (isSpotifyReturn) {
			const token = data.access_token as string
			if (!data.error && token) {
				window.location.hash = '';
				LocalStorageStore.setAccessToken(token);
				return 'parsed';
			}
			else {
				return 'error'
			}
		}
		return null;
	}
}