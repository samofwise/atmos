import { combineReducers } from "redux";
import PlaylistReducer from "./PlaylistsReducer";
import SavePlaylistReducer from "./SavePlaylistReducer";
import PlayingReducer from "./PlayingReducer";


const RootReducer = combineReducers({
	playlists: PlaylistReducer,
	savingPlaylist: SavePlaylistReducer,
	playing: PlayingReducer
})

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer;