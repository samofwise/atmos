import Playlist from "src/Models/Playlist";
import { ThunkAction } from "redux-thunk";
import { IState } from "../State";
import { Firebase } from "src/core/Firebase";
import firebase from "firebase";

export const changeName = (name: string) => ({ type: <'ChangeName'>'ChangeName', name });
export const addTracks = (tracks: SpotifyApi.TrackObjectFull[]) => ({ type: <'AddTracks'>'AddTracks', tracks });
export const removeTracks = (tracks: SpotifyApi.TrackObjectFull[]) => ({ type: <'RemoveTracks'>'RemoveTracks', tracks });
const savePlaylistLocal = (playlist: Playlist) => ({ type: <'SavePlaylist'>'SavePlaylist', playlist });

export type SavePlaylistActionTypes =
	ReturnType<typeof changeName> |
	ReturnType<typeof addTracks> |
	ReturnType<typeof removeTracks> |
	ReturnType<typeof savePlaylistLocal>

export type ThunkResult<R> = ThunkAction<R, IState, null, SavePlaylistActionTypes>;


export const savePlaylist = (playlist: Playlist): ThunkResult<Promise<void>> => {
	return async (dispatch) => {
		const db = Firebase.getFireStore();

		const user = firebase.auth().currentUser;
		const doc = await db.collection('users').doc(user.uid).collection('playlists').add(playlist);

		playlist = { ...playlist, id: doc.id }

		dispatch(savePlaylistLocal(playlist));
	}
}