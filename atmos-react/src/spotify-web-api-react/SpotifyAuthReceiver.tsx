import { Hidden } from '@mui/material';
import React from 'react';
import useSpotifyHandler from './useSpotifyHandler';

function SpotifyAuthReceiver() {
  useSpotifyHandler('off');
  return <Hidden />;
}

export default SpotifyAuthReceiver;
