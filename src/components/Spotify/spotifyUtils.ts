import { SourcePlaylist, Song } from '../../api/api';

export const getImage = (i: SpotifyApi.PlaylistObjectSimplified | SpotifyApi.TrackObjectFull |
Spotify.Track) => (
  getImageFromList(i.type === 'playlist' ? i.images : i.album.images as SpotifyApi.ImageObject[])
);

export const getImageFromList = (i:SpotifyApi.ImageObject[]) => i.sort(spotifyImageSort)[0]?.url;

export const getArtist = (i:SpotifyApi.TrackObjectFull | Spotify.Track) => i.artists.map((a) => a.name).join(', ');

export const spotifyImageSort = (i:SpotifyApi.ImageObject) => i.width ?? 0;

export const convertSpotifyPlaylist = (p: SpotifyApi.PlaylistObjectSimplified) => ({
  id: p.id,
  name: p.name,
  uri: p.uri,
}) as SourcePlaylist;

export const convertSpotifyTrack = (t: SpotifyApi.TrackObjectFull) => ({
  id: t.id,
  name: t.name,
  uri: t.uri,
  image: getImage(t),
  artist: getArtist(t),
}) as Song;
