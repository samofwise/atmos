import { AddOutlined, EditOutlined, PlayArrow } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Card, CardContent, IconButton, List, ListItem, ListItemButton, ListItemText, Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { PlaylistGroup } from '../../api/api';
import usePlaylistGroupService from '../../dal/usePlaylistGroupService';

function Playlists() {
  const { getPlaylistGroups } = usePlaylistGroupService();
  const [playlistGroups, setPlaylistGroup] = useState<PlaylistGroup[]>([]);

  const getData = useCallback(
    // TODO: Fix Later
    // eslint-disable-next-line max-len
    async () => setPlaylistGroup((await getPlaylistGroups()).listPlaylistGroups?.items as PlaylistGroup[]),
    [],
  );
  useEffect(() => { getData(); }, [getData]);

  return (
    <>
      <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <EditOutlined />
        </IconButton>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <AddOutlined />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', padding: '0 10px', width: '100%' }}>
        {(playlistGroups?.length ? playlistGroups : tempPlaylistGroups).map((g) => (
          <Card key={g.id} sx={{ width: 250, height: 250, margin: '10px' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {g.name}
              </Typography>
              <List>
                {g.Playlists?.items?.map((p) => (
                  <ListItem key={p?.id} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={p?.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <PlayArrow />
        </IconButton>
      </AppBar>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
const addId = <_, T>(a: T, i: number):T & { id:string } => ({ ...a, id: i.toString() });
const tempPlaylistGroups = [
  { name: 'General', Playlists: { items: [{ name: 'Ambient' }, { name: 'Exciting' }, { name: 'Battle' }].map(addId) } },
  { name: 'Tavern', Playlists: { items: [{ name: 'Chill' }, { name: 'Exciting' }, { name: 'Battle' }].map(addId) } },
  { name: 'Cave', Playlists: { items: [{ name: 'Chill' }, { name: 'Creepy' }, { name: 'Battle' }].map(addId) } },
].map(addId);

export default Playlists;
