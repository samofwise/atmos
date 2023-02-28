import { Skeleton, styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { getArtist, getImage } from './spotifyUtils';
import { SongListType } from './types';

interface Props {
  item: SongListType | null
}

function SpotifyListDetail({ item }: Props) {
  return (
    <StyledSection>
      {!item ? (
        <>
          <Skeleton variant="rectangular" width={50} height={50} />
          <Skeleton variant="rectangular" width={200} height={20} />
          <Skeleton variant="rectangular" width={180} height={15} />
        </>
      ) : (
        <>
          <ListItemAvatar>
            <Avatar src={getDetailImage(item)} variant="rounded" />
          </ListItemAvatar>
          <ListItemText primary={`${item.name}`} secondary={getSecondary(item)} />
        </>
      )}
    </StyledSection>
  );
}

const StyledSection = styled('section')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const getDetailImage = (i: SongListType) => ('type' in i ? getImage(i) : i.image ?? '');

const getSecondary = (i: SongListType) => {
  if ('type' in i && i.type === 'track') return getArtist(i);
  return ('artist' in i ? i.artist : 'Playlist');
};

export default SpotifyListDetail;
