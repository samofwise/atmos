import ActionTypes from "../Actions/ActionTypes";
import Playlist from "src/Models/Playlist";

const initialState = {
	devices: <SpotifyApi.UserDevice[]>[],
	device: <SpotifyApi.UserDevice>null,
	playlist: <Playlist>null,
	isPlaying: <boolean>false
}

const PlayingReducer = (state = initialState, action: ActionTypes): typeof initialState => {
	switch (action.type) {
		case 'updateDevices':
			return { ...state, devices: action.devices };
		case 'updateCurrentDevice':
			return { ...state, device: action.device };
		case 'updateIsPlaying':
			return { ...state, isPlaying: action.isPlaying };
		case 'updateCurrentPlaylist':
			return { ...state, playlist: action.playlist };
		default:
			return state;
	}
};

export default PlayingReducer;