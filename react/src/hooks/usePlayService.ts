import { useContext, useEffect, useMemo } from 'react';
import { useErrorState, usePlaybackState, usePlayerDevice, useSpotifyPlayer } from 'react-spotify-web-playback-sdk';
import { Playlist } from '../api/api';
import PlayContext from '../contexts/PlayContext';
import useSpotify from '../spotify-web-api-react/useSpotify';

const usePlayService = () => {
  const errorState = useErrorState();
  const { api } = useSpotify();
  const device = usePlayerDevice();
  const player = useSpotifyPlayer();
  const state = usePlaybackState(true, 500);
  const [playModel, setPlayModel] = useContext(PlayContext);
  // eslint-disable-next-line no-nested-ternary
  const status = useMemo(() => (!device ? 'null' : (device.status === 'ready' ? 'ready' : 'not ready')), [device, device?.status]);
  const currentTrack = useMemo(() => state?.track_window.current_track, [state]);
  const isLoading = useMemo(() => !!state?.loading, [state]);

  useEffect(() => {
    console.log('spotify Error', errorState);
  }, [errorState]);

  const play = async (playlist: Playlist) => {
    if (!device) alert('Device Not Connected');
    else if (!player) alert('Player Not Connected');
    else {
      setPlayModel((m) => ({ ...m, currentPlaylist: playlist, isPlaying: true }));

      await api.play({ device_id: device.device_id, uris: playlist.songs.map((s) => s.uri) });
      await player.resume();
    }
  };

  const pause = () => {
    player?.pause();
    setPlayModel((m) => ({ ...m, isPlaying: false }));
  };

  const resume = () => {
    player?.resume();
    setPlayModel((m) => ({ ...m, isPlaying: true }));
  };

  const next = () => {
    player?.nextTrack();
  };

  const connect = () => {
    player?.connect();
  };

  return { play, pause, resume, next, connect, playModel, status, currentTrack, isLoading };
};

export default usePlayService;
