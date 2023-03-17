import { ConnectedTv, Pause, PlayArrow, SkipNext, ThumbUp } from '@mui/icons-material';
import { AppBar, IconButton, styled } from '@mui/material';
import React, { useCallback } from 'react';
import usePlayService from '../../hooks/usePlayService';
import SpotifyListDetail from '../Spotify/SpotifyListDetail';

function PlayBar() {
  const {
    playModel, resume, pause, next, status, currentTrack,
    isLoading,
  } = usePlayService();

  const playAction = useCallback(!playModel.isPlaying ? resume : pause, [playModel]);

  return (
    <StyledAppBar position="relative" sx={{ top: 'auto', bottom: 0 }}>
      <LeftSection>
        {currentTrack ? <SpotifyListDetail item={!isLoading ? currentTrack : null} />
          : <h3>Select a Playlist</h3>}
      </LeftSection>
      <CenterItem>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ m: 2 }}>
          <ThumbUp />
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={playAction} sx={{ m: 2 }}>
          {!playModel.isPlaying ? <PlayArrow /> : <Pause />}
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={next} sx={{ m: 2 }}>
          <SkipNext />
        </IconButton>
      </CenterItem>
      <RightItem>
        <p>
          Ready:
          {' '}
          {status}
        </p>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ m: 2 }}>
          <ConnectedTv />
        </IconButton>
      </RightItem>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const CenterItem = styled('section')({ position: 'absolute', left: 'auto', right: 'auto' });

const LeftSection = styled('section')({ marginRight: 'auto' });

const RightItem = styled('section')({ display: 'flex', flexDirection: 'row', marginLeft: 'auto' });

export default PlayBar;
