import { ListItemIcon, Checkbox, TextField, debounce } from '@mui/material';
import React, { useMemo, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useSpotify from '../../spotify-web-api-react/useSpotify';
import { Song, SourcePlaylist } from '../../api/api';
import { convertSpotifyPlaylist, convertSpotifyTrack } from './spotifyUtils';
import SongList from './SongList';
import { SpotifyItemFull, SongListType } from './types';

interface Props {
  value?: (Song | SourcePlaylist)[];
  onChange?: (items: (Song | SourcePlaylist)[]) => void;
}

function SpotifySearch({ value, onChange }: Props) {
  const checkedItems = useMemo(() => value ?? [], [value]);
  const { api } = useSpotify();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([] as (
    SpotifyApi.PlaylistObjectFull | SpotifyApi.TrackObjectFull
  )[]);

  const doSearch = async (searchString: string) => {
    if (searchString && searchString.length) {
      const response = await api.search(searchString, ['playlist', 'track'], { limit: 5 });
      const playlists = response.playlists?.items as SpotifyApi.PlaylistObjectSimplified[];
      const fullPlaylists = await Promise.all(playlists.map(async (p) => ({
        ...p,
        tracks: await api.getPlaylistTracks(p.id),
      }))) as SpotifyApi.PlaylistObjectFull[];

      const tracks = response.tracks?.items as SpotifyApi.TrackObjectFull[];
      const joinedItems = [...fullPlaylists, ...tracks]
        .sort((a, b) => a.name.localeCompare(b.name));
      setResults(joinedItems);
    } else setResults([]);
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    debounce(doSearch, 500)(event.target.value);
  };

  const onItemCheck = (item: SpotifyItemFull) => {
    const converted = item.type === 'playlist' ? convertSpotifyPlaylist(item) : convertSpotifyTrack(item);
    const playlistTracks = item.type === 'playlist'
      ? item.tracks.items.map((t) => ({
        ...convertSpotifyTrack(t.track as SpotifyApi.TrackObjectFull),
        parentPlaylistId: converted.id,
      }))
      : [];
    const shouldCheck = !checkedItems.find((i) => i.id === item.id);
    if (onChange) onChange(
      shouldCheck ? ([...checkedItems, converted, ...playlistTracks])
        : checkedItems.filter((i) => i.id !== item.id)
          .filter((i) => !playlistTracks.find((pt) => pt.id === i.id)),
    );
  };

  const getSubItems = (item: SongListType) => (
    'type' in item && item.type === 'playlist' ? item.tracks.items.map((i) => i.track) as SongListType[] : []
  );

  const getChecked = (item: SongListType) => !!checkedItems.find((c) => c.id === item.id);

  return (
    <>
      <TextField label="Search" value={search} onChange={onSearchChange} placeholder="Search Playlists, Artists or Songs" name="search" fullWidth />
      <SongList items={results} getSubItems={getSubItems}>
        {(item) => (
          <ListItemIcon onClick={() => onItemCheck(item as SpotifyItemFull)}>
            <Checkbox edge="start" checked={getChecked(item)} tabIndex={-1} disableRipple />
          </ListItemIcon>
        )}
      </SongList>
    </>
  );
}

export default SpotifySearch;
