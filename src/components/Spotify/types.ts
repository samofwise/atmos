import { Song, SourcePlaylist } from '../../api/api';

export type SpotifyItemFull = SpotifyApi.PlaylistObjectFull | SpotifyApi.TrackObjectFull;

export type SpotifyItemSimple = SpotifyApi.PlaylistObjectSimplified | SpotifyApi.TrackObjectFull;

export type SongListType = Song | SourcePlaylistFull
| SpotifyApi.PlaylistObjectFull | SpotifyApi.TrackObjectFull | Spotify.Track;

export type SourcePlaylistFull = SourcePlaylist & { tracks: Song[] };
