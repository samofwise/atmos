import { ThunkAction } from "redux-thunk";
import { IState } from "../State";
import Spotify from "src/core/Spotify";
import Playlist from "src/Models/Playlist";
import shuffle from "shuffle-array"
import { ThunkDispatch } from "../Thunk";

const updateDevices = (devices: SpotifyApi.UserDevice[]) => ({ type: <'updateDevices'>'updateDevices', devices })
const updateCurrentDevice = (device: SpotifyApi.UserDevice) => ({ type: <'updateCurrentDevice'>'updateCurrentDevice', device })
const updateCurrentPlaylist = (playlist: Playlist) => ({ type: <'updateCurrentPlaylist'>'updateCurrentPlaylist', playlist })
const updateIsPlaying = (isPlaying: boolean) => ({ type: <'updateIsPlaying'>'updateIsPlaying', isPlaying })


export type PlayingActionTypes =
	ReturnType<typeof updateDevices> |
	ReturnType<typeof updateCurrentDevice> |
	ReturnType<typeof updateCurrentPlaylist> |
	ReturnType<typeof updateIsPlaying>

export type ThunkResult<R> = ThunkAction<R, IState, null, PlayingActionTypes>;

export const loadPlayingState = (): ThunkResult<Promise<void>> => {
	return async (dispatch) => {
		Promise.all([
			loadIsPlaying(dispatch),
			loadDevices(dispatch)
		])
	}
}

const loadIsPlaying = async (dispatch: ThunkDispatch) => {
	const { is_playing: isPlaying } = await Spotify.Api.getMyCurrentPlaybackState();
	await dispatch(updateIsPlaying(isPlaying));
}

const loadDevices = async (dispatch: ThunkDispatch) => {
	const { devices } = await Spotify.Api.getMyDevices();

	await dispatch(updateDevices(devices))

	const currentDevice = devices.find(d => d.is_active);
	if (currentDevice)
		await dispatch(updateCurrentDevice(currentDevice));
	else if (devices.length === 1)
		await dispatch(updateCurrentDevice(devices[0]));
}


export const setActiveDevice = (device: SpotifyApi.UserDevice): ThunkResult<Promise<void>> => {
	return async (dispatch) => {
		await Spotify.Api.transferMyPlayback([device.id]);
		await dispatch(updateCurrentDevice(device));
	}
}

export const playPlaylist = (playlist: Playlist): ThunkResult<Promise<void>> => {
	return async (dispatch, getState) => {
		const { device: currentDevice, playlist: currentPlaylist } = getState().playing;

		if (!currentDevice)
			alert('Please Select a Device');
		else {
			if (!currentPlaylist || currentPlaylist.id !== playlist.id)
				dispatch(updateCurrentPlaylist(playlist));

			const shuffledTracks = shuffle(playlist.tracks)
			await Spotify.Api.play({ device_id: currentDevice.id, uris: shuffledTracks.map(t => t.uri) });
			dispatch(updateIsPlaying(true));
		}
	}
}

export const playCurrentlyPlaylist = (): ThunkResult<Promise<void>> => {
	return async (dispatch, getState) => {
		const { playlist: currentPlaylist } = getState().playing;
		if (!currentPlaylist)
			alert('Please Select a Playlist');
		else
			dispatch(playPlaylist(currentPlaylist));
	}
}

export const pauseCurrentlyPlaying = (): ThunkResult<Promise<void>> => {
	return async (dispatch, getState) => {
		const { device: currentDevice } = getState().playing;

		if (!currentDevice)
			alert('Please Select a Device');
		else {
			await Spotify.Api.pause();
			dispatch(updateIsPlaying(false));
		}
	}
}

export const nextTrack = (): ThunkResult<Promise<void>> => {
	return async () => {
		await Spotify.Api.skipToNext();
	}
}