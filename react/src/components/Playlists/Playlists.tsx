import { Add, Delete, Done, Edit } from '@mui/icons-material';
import {
  Box,
  Card, CardContent, Fade, IconButton, ImageList,
  ImageListItem, List, ListItem, ListItemButton,
  ListItemText, styled, Typography,
} from '@mui/material';

import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { usePlayerDevice } from 'react-spotify-web-playback-sdk';
import { ModelPlaylistConnection, Playlist, PlaylistGroup } from '../../api/api';
import usePlaylistGroupService from '../../data/usePlaylistGroupService';
import usePlayService from '../../hooks/usePlayService';
import useSpotify from '../../spotify-web-api-react/useSpotify';
import useSpotifyHandler from '../../spotify-web-api-react/useSpotifyHandler';
import { heightWithoutBar } from '../theme';
import PlayBar from './PlayBar';

function Playlists() {
  useSpotifyHandler();
  const device = usePlayerDevice();
  const { play } = usePlayService();

  const { getPlaylistGroups, deletePlaylistGroup } = usePlaylistGroupService();
  const [playlistGroups, setPlaylistGroup] = useState<PlaylistGroup[]>([]);
  const loadData = useCallback(async () => setPlaylistGroup(await getPlaylistGroups()), []);
  useEffect(() => { loadData(); }, [loadData]);
  const [isEditing, setIsEditing] = useState(false);
  const { api } = useSpotify();
  const [devices, setDevices] = useState<SpotifyApi.UserDevice[]>();

  useEffect(() => {
    (async () => setDevices((await api.getMyDevices()).devices))();
  }, [device]);

  const toggleIsEditing = () => setIsEditing((x) => !x);

  const deletePlaylist = async (group : PlaylistGroup) => {
    await deletePlaylistGroup(group.id);
    loadData();
  };

  return (
    <StyledPage>
      <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleIsEditing}>
          {!isEditing ? <Edit /> : <Done />}
        </IconButton>
        <IconButton component={Link} to="/playlists/new" size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Add />
        </IconButton>
      </Box>
      <Box sx={{ flex: '1 1 auto', overflowY: 'auto', display: 'flex', flexWrap: 'wrap', padding: '0 10px 10px', m: 'auto 0' }}>
        {playlistGroups.map((g) => (
          <PlaylistCard
            key={g.id}
            playlistGroup={g}
            {...{ isEditing, deletePlaylist, playPlaylist: play }}
          />
        ))}
      </Box>
      <PlayBar />
    </StyledPage>
  );
}

const StyledPage = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...heightWithoutBar(theme),
}));

export default Playlists;

interface PlaylistCardProps {
  playlistGroup: PlaylistGroup,
  isEditing: boolean
  deletePlaylist: (group: PlaylistGroup) => void,
  playPlaylist: (playlist: Playlist) => void
}

function PlaylistCard({
  playlistGroup, isEditing, deletePlaylist,
  playPlaylist,
}: PlaylistCardProps) {
  const onDeleteClick = () => deletePlaylist(playlistGroup);
  // console.log(playlistGroup);
  return (
    <StyledCard key={playlistGroup.id}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <StyledImageList cols={2} gap={10}>
          {getImages(playlistGroup).map((item) => (
            <ImageListItem key={item}>
              <img src={`${item}`} alt="" className={isEditing ? 'blurred' : ''} />
            </ImageListItem>
          ))}
        </StyledImageList>
        <StyledHeader gutterBottom variant="h5" sx={{ textAlign: 'center', zIndex: 100 }}>
          {playlistGroup.name}
        </StyledHeader>
        <Box sx={{ flex: '1 0 auto', display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <Fade in={isEditing}>
            <StyledContent sx={{ position: 'absolute' }}>
              <IconButton component={Link} to={`/playlists/${playlistGroup.id}`} size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <Edit />
              </IconButton>
              <IconButton onClick={onDeleteClick} size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <Delete />
              </IconButton>
            </StyledContent>
          </Fade>
          <Fade in={!isEditing}>
            <StyledContent>
              <List sx={{ width: '100%', position: 'absolute' }}>
                {playlistGroup.Playlists?.items?.map((p) => (
                  <ListItem key={p?.id} disablePadding onClick={() => p && playPlaylist(p)}>
                    <ListItemButton>
                      <ListItemText primary={p?.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </StyledContent>
          </Fade>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
width: 250px;
height: 250px;
position: relative;
margin: 10px;
border-radius: 15px;
box-shadow: 3px 3px 0px 2px rgba(255,255,255,0.12)
`;

const StyledHeader = styled(Typography)({
  position: 'relative',
  zIndex: 10,
});

const StyledImageList = styled(ImageList)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 0,
  margin: 0,
  '& img': {
    opacity: 0.3,
    transition: 'filter 200ms ease-in-out',
    '&.blurred': { filter: 'blur(2px)' },
  },
});

const StyledContent = styled(Box)({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const getImages = (g: PlaylistGroup) => {
  const uniqueItems = (g.Playlists as ModelPlaylistConnection).items
    .flatMap((p) => (p as Playlist).songs?.map((s) => s.image))
    .filter((i) => i).filter((v, i, a) => a.indexOf(v) === i).slice(0, 4);

  if (uniqueItems.length < 4) return [...uniqueItems, ...uniqueItems,
    ...uniqueItems, ...uniqueItems].slice(0, 4);
  return uniqueItems;
};
