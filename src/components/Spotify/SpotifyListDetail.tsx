import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { getArtist, getImage } from './spotifyUtils';
import { SongListType } from './types';

interface Props {
  item: SongListType
}

function SpotifyListDetail({ item }: Props) {
  return (
    <>
      <ListItemAvatar>
        <Avatar src={getDetailImage(item)} variant="rounded" />
      </ListItemAvatar>
      <ListItemText primary={`${item.name}`} secondary={getSecondary(item)} />
    </>
  );
}

const getDetailImage = (i: Props['item']) => ('type' in i ? getImage(i) : i.image ?? '');

const getSecondary = (i: Props['item']) => {
  if ('type' in i && i.type === 'track') return getArtist(i);
  return ('artist' in i ? i.artist : 'Playlist');
};

export default SpotifyListDetail;
