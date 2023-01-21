import { AddOutlined, DoneOutline, EditOutlined, PlayArrow } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Card, CardContent, IconButton, List, ListItem, ListItemButton, ListItemText, styled, Typography,
} from '@mui/material';

import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaylistGroup } from '../../api/api';
import usePlaylistGroupService from '../../dal/usePlaylistGroupService';

function Playlists() {
  const { getPlaylistGroups } = usePlaylistGroupService();
  const [playlistGroups, setPlaylistGroup] = useState<PlaylistGroup[]>([]);
  const loadData = useCallback(async () => setPlaylistGroup(await getPlaylistGroups()), []);
  useEffect(() => { loadData(); }, [loadData]);
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => setIsEditing((x) => !x);

  return (
    <>
      <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleIsEditing}>
          {!isEditing ? <EditOutlined /> : <DoneOutline />}
        </IconButton>
        <IconButton component={Link} to="/playlists/new" size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <AddOutlined />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '0 10px 10px', m: 'auto 0' }}>
        {playlistGroups.map((g) => (
          <StyledCard key={g.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                {g.name}
              </Typography>
              { isEditing && (
              <IconButton component={Link} to={`/playlists/${g.id}`} size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <EditOutlined />
              </IconButton>
              )}
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
          </StyledCard>
        ))}
      </Box>
      <AppBar position="sticky" sx={{ top: 'auto', bottom: 0 }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <PlayArrow />
        </IconButton>
      </AppBar>
    </>
  );
}

const StyledCard = styled(Card)`
width: 250px;
height: 250px; 
margin: 10px;
border-radius: 15px;
box-shadow: 3px 3px 0px 2px rgba(255,255,255,0.12)
`;

export default Playlists;
