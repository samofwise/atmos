import { PlaylistActionTypes } from "./PlaylistActions";
import { SavePlaylistActionTypes } from "./SavePlaylistActions";
import { PlayingActionTypes } from "./PlayingActions";

type ActionTypes = PlaylistActionTypes | SavePlaylistActionTypes | PlayingActionTypes

export default ActionTypes;