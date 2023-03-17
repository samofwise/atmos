import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AppBar, Box, Container, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AddOutlined, DeleteOutline } from '@mui/icons-material';
import usePlaylistGroupService from '../../data/usePlaylistGroupService';
import { NextPlaylist, Playlist, PlaylistGroup, Song, SourcePlaylist } from '../../api/api';
import useSpotify from '../../spotify-web-api-react/useSpotify';
import PlaylistDetails from './PlaylistDetails';
import { getImageFromList } from '../Spotify/spotifyUtils';
import usePlaylistService from '../../data/usePlaylistService';
import useSpotifyHandler from '../../spotify-web-api-react/useSpotifyHandler';

const defaultGroup = { name: '', Playlists: { items: [] as Playlist[] } } as PlaylistGroup;
const defaultPlaylist = {
  name: '',
  songs: [] as Song[],
  sourcePlaylists: [] as SourcePlaylist[],
  nextPlaylists: [] as NextPlaylist[],
  plays: 0,
} as Playlist;

function PlaylistEdit() {
  useSpotifyHandler('alert');
  const { getPlaylistGroup, createPlaylistGroup, updatePlaylistGroup } = usePlaylistGroupService();
  const { createPlaylist, updatePlaylist, deletePlaylist } = usePlaylistService();
  const { api } = useSpotify();
  const { id } = useParams();
  const [playlistGroup, setPlaylistGroup] = useState<PlaylistGroup>(defaultGroup);
  const isNew = id === 'new';
  const [tab, settab] = useState('');
  const currentPlaylist = useMemo(
    () => playlistGroup.Playlists?.items.find((p) => p?.id === tab),
    [tab, playlistGroup],
  );

  if (!id) throw new Error('id is not defined');

  useEffect(() => {
    if (!isNew) loadData();
  }, []);

  const loadData = useCallback(
    async () => {
      const group = await getPlaylistGroup(id);
      setPlaylistGroup(group);
      settab(group.Playlists?.items[0]?.id ?? '');
      getSourcedPlaylistImages(group);
    },
    [id],
  );

  const getSourcedPlaylistImages = (group: PlaylistGroup) => {
    group.Playlists?.items.forEach(async (p) => {
      if (p) {
        const newPlaylist: Playlist = {
          ...p,
          sourcePlaylists: await Promise.all(p.sourcePlaylists.map(async (s) => ({
            ...s,
            image: await getImageForSourcedPlaylist(s),
          }))),
        };
        onPlaylistChange(p.id, newPlaylist);
      }
    });
  };

  const getImageForSourcedPlaylist = async ({ id: sourcedId }: SourcePlaylist) => (
    getImageFromList(await api.getPlaylistCoverImage(sourcedId))
  );

  const goHome = () => true;// navigate('/');

  const changeTab = (event: React.SyntheticEvent, value: string) => settab(value);

  const onDone = async () => {
    if (isNew) await create();
    else await update();
    goHome();
  };

  const create = async () => {
    const group = await createPlaylistGroup({ name: playlistGroup.name });
    playlistGroup.Playlists?.items.forEach(async (p) => {
      if (p) await createPlaylist({ ...p, playlistGroupId: group.id });
    });
  };

  const update = async () => {
    const group = await updatePlaylistGroup({ id: playlistGroup.id, name: playlistGroup.name });
    playlistGroup.Playlists?.items.forEach(async (p) => {
      if (p) {
        // eslint-disable-next-line unused-imports/no-unused-vars
        const { PlaylistGroup: unneeded, createdAt: unneeded2, updatedAt: u3, ...playlist } = p;
        if (group.Playlists?.items.find((i) => i?.id === p.id)) (
          await updatePlaylist({ ...playlist })
        );
        else await createPlaylist({ ...playlist, playlistGroupId: group.id });
      }
    });
    // Delete missing items
    group.Playlists?.items.forEach(async (gp) => {
      if (gp && !playlistGroup.Playlists?.items.find((i) => i?.id === gp.id)) (
        await deletePlaylist(gp.id)
      );
    });
  };

  const onNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => (
    setPlaylistGroup((g) => ({ ...g, name: target.value }))
  );

  const onPlaylistCreate = () => {
    const newId = Date.now().toString();
    setPlaylistGroup((g) => {
      const newPlaylistGroup = { ...g };
      if (newPlaylistGroup.Playlists)
      // eslint-disable-next-line nonblock-statement-body-position
        newPlaylistGroup.Playlists.items = [
          ...newPlaylistGroup.Playlists.items,
          { ...defaultPlaylist, id: newId } as Playlist,
        ];
      return newPlaylistGroup;
    });
    settab(newId);
  };

  const onPlaylistChange = (playlistId: string, value: Playlist) => {
    setPlaylistGroup((g) => {
      const newPlaylistGroup = { ...g };
      if (newPlaylistGroup.Playlists)
      // eslint-disable-next-line nonblock-statement-body-position
        newPlaylistGroup.Playlists.items = [
          ...newPlaylistGroup.Playlists.items.map((p) => (p?.id !== playlistId ? p : value)),
        ];
      return newPlaylistGroup;
    });
  };

  const onPlaylistDelete = () => {
    const index = playlistGroup.Playlists?.items.findIndex((p) => p?.id === tab) ?? 1;
    onPlaylistChange(tab, undefined as never);
    settab(playlistGroup.Playlists?.items[index - 1]?.id as string);
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ mt: '20px', mb: '20px', padding: '20px' }}>
        <Stack spacing={2}>
          <Typography component="h2" variant="h5" sx={{ textAlign: 'center' }}>
            {isNew ? 'New ' : 'Edit '}
            Playlist Group
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={playlistGroup.name}
            onChange={onNameChange}
            autoFocus
            fullWidth
            required
          />

          <Box sx={{ bgcolor: 'background.paper' }}>
            <AppBar position="static">
              <Typography component="h3" variant="h6" sx={{ width: '100%', textAlign: 'center' }}>
                Playlists
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Tabs
                  value={tab}
                  onChange={changeTab}
                  indicatorColor="secondary"
                  scrollButtons="auto"
                  variant="scrollable"
                  textColor="inherit"
                  sx={{ flex: '1 1 auto' }}
                >
                  {playlistGroup.Playlists?.items.map((t) => (
                    t && <Tab key={t.id} label={t.name.length ? t.name : 'New'} value={t.id} />
                  ))}
                </Tabs>
                <IconButton size="large" color="inherit" onClick={onPlaylistCreate}>
                  <AddOutlined />
                </IconButton>
                {playlistGroup.Playlists?.items.length ? (
                  <IconButton size="large" color="inherit" onClick={onPlaylistDelete}>
                    <DeleteOutline />
                  </IconButton>
                ) : null}
              </Box>
            </AppBar>

            {
            currentPlaylist ? (
              <PlaylistDetails
                playlist={currentPlaylist}
                onChange={onPlaylistChange}
              />
            )
              : <p>Create a New Playlist</p>
          }
          </Box>

          <Box sx={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={goHome}
              sx={{ ml: 2 }}
            >
              Cancel

            </Button>
            <Button variant="contained" onClick={onDone} sx={{ ml: 2 }}>Done</Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}

export default PlaylistEdit;
