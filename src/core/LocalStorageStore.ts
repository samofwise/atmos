
export default class LocalStorageStore {
	static spotifyAccessToken: string = 'spotifyAccessToken';

	public static getAccessToken() {
		let token = this.getString(this.spotifyAccessToken);
		token = token ? token : null;
		return token
	}

	public static setAccessToken(token: string) {
		this.setString(this.spotifyAccessToken, token);
	}


	// private static getObjectFromLocalStorage<T>(key: string) {
	// 	let value = this.getString(key)
	// 	return JSON.parse(value) as T;
	// }

	private static getString(key: string): string {
		let value: string = localStorage.getItem(key);
		return value;
	}

	private static setString(key: string, value: string){
		localStorage.setItem(key, value);
	}
}