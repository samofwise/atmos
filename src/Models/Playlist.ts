class Playlist {
	id: string;
	name: string;
	slug: string;
	tracks: SpotifyApi.TrackObjectFull[]

	constructor(){
		this.tracks = []
	}
}

export default Playlist;