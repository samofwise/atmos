import Playlist from "src/Models/Playlist";
import { Dispatch, ActionCreator } from "redux";
import firebase from "firebase";
import { Firebase } from "src/core/Firebase";
import { ThunkAction } from "redux-thunk";
import { IState } from "../State";


const addPlaylistLocal = (playlist: Playlist) => ({ type: <'AddPlaylist'>'AddPlaylist', playlist });
const updatePlaylists = (playlists: Playlist[]) => ({ type: <'UpdatePlaylists'>'UpdatePlaylists', playlists });

export type PlaylistActionTypes = ReturnType<typeof addPlaylistLocal> | ReturnType<typeof updatePlaylists>;


export type ThunkResult<R> = ThunkAction<R, IState, null, PlaylistActionTypes>;

export const loadPlaylists = (): ThunkResult<Promise<void>> => {
	return async (dispatch) => {
		const db = Firebase.getFireStore();

		const user = Firebase.getApp().auth().currentUser;
		if (user != null) {
			const response = await db.collection('users').doc(user.uid).collection('playlists').get();
			const playlists = response.docs.map(d => (<Playlist>{ id: d.id, ...d.data() }))

			if (playlists)
				dispatch(updatePlaylists(playlists));
		}
	}
}





