import ActionTypes from "../Actions/ActionTypes";
import Playlist from "src/Models/Playlist";

const initialState: Playlist[] = []

const PlaylistsReducer = (state = initialState, action: ActionTypes): typeof initialState => {
	switch (action.type) {
		case 'UpdatePlaylists':
			return  action.playlists;
		case 'SavePlaylist':
			const oldPlaylists = state.filter(p => p.id !== action.playlist.id);
			return [...oldPlaylists, action.playlist]
		default:
			return state;
	}
};

export default PlaylistsReducer;