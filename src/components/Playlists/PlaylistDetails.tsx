import { ExpandMore, RemoveCircleOutline } from '@mui/icons-material';
import { Stack, TextField, Accordion, AccordionSummary, Typography, AccordionDetails, ListItemIcon } from '@mui/material';
import { useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Playlist, Song, SourcePlaylist } from '../../api/api';
import SongList from '../Spotify/SongList';
import SpotifySearch from '../Spotify/SpotifySearch';
import { SongListType } from '../Spotify/types';

interface Props {
  playlist: Playlist,
  onChange?: (playlistId: string, value: Playlist) => void
}

function PlaylistDetails({ playlist, onChange }: Props) {
  const selected = useMemo(
    () => [...playlist.sourcePlaylists, ...playlist.songs],
    [playlist.sourcePlaylists, playlist.songs],
  );
  const listItems = useMemo(() => {
    const fullPlaylists = playlist.sourcePlaylists.map((p) => ({
      ...p,
      tracks: playlist.songs.filter((s) => s.parentPlaylistId === p.id),
    }));

    return [...fullPlaylists, ...playlist.songs.filter((s) => !s.parentPlaylistId)];
  }, [playlist.sourcePlaylists, playlist.songs]);

  const onItemRemove = (item: SongListType) => {
    const changes = 'artist' in item ? { songs: playlist.songs.filter((i) => i.id !== item.id) }
      : { sourcePlaylists: playlist.sourcePlaylists.filter((i) => i.id !== item.id) };
    if (onChange) onChange(playlist.id, { ...playlist, ...changes });
  };

  const onSetSelectedItems = (items: (Song | SourcePlaylist)[]) => {
    const sourcePlaylists = items.filter((i) => !('artist' in i)) as SourcePlaylist[];
    const songs = items.filter((i) => 'artist' in i) as Song[];
    const updated: Playlist = { ...playlist, sourcePlaylists, songs };
    if (onChange) onChange(playlist.id, updated);
  };

  const onNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => (
    onChange && onChange(playlist.id, { ...playlist, name: target.value })
  );

  const getSubItems = (item: SongListType) => (
    !('type' in item) && 'tracks' in item ? item.tracks as SongListType[] : []
  );

  const getHandleCheck = (item: SongListType) => () => onItemRemove(item);

  return (
    <Stack spacing={2} sx={{ m: '10px 5px 5px' }}>
      <TextField label="Name" name="name" value={playlist.name} onChange={onNameChange} fullWidth required />
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>
            Current Songs (
            {playlist.songs.length}
            )
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pl: 0, pr: 0 }}>
          <SongList items={listItems} getSubItems={getSubItems}>
            {(item) => (
              <ListItemIcon onClick={getHandleCheck(item)}>
                <RemoveCircleOutline />
              </ListItemIcon>
            )}
          </SongList>
        </AccordionDetails>
      </Accordion>
      <SpotifySearch value={selected} onChange={onSetSelectedItems} />
    </Stack>
  );
}

export default PlaylistDetails;
