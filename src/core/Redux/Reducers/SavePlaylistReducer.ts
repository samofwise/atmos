import ActionTypes from "../Actions/ActionTypes";
import Playlist from "src/Models/Playlist";

const initialState = new Playlist()

const SavePlaylistReducer = (state = initialState, action: ActionTypes): typeof initialState => {
	switch (action.type) {
		case 'ChangeName':
			return { ...state, name: action.name }
		case 'AddTracks':
			return { ...state, tracks: [...state.tracks, ...action.tracks] }
		case 'RemoveTracks':
			const newTracks = state.tracks.filter(st => !action.tracks.map(t => t.id).some(id => id === st.id));
			return { ...state, tracks: [...newTracks] }
		case 'SavePlaylist':
			return new Playlist();
		default:
			return state;
	}
};

export default SavePlaylistReducer;