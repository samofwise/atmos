import { Hidden } from '@mui/material';
import React from 'react';
import useSpotifyReceiver from './useSpotifyReceiver';

function SpotifyAuthReceiver() {
  useSpotifyReceiver();
  return <Hidden />;
}

export default SpotifyAuthReceiver;
