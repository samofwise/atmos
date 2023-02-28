import React, { createContext, SetStateAction, useState } from 'react';
import { Playlist, Song } from '../api/api';

interface Model {
  isPlaying: boolean;
  currentPlaylist: Playlist | null;
  currentSong: Song | null;
}

const defaultModel: Model = {
  isPlaying: false,
  currentPlaylist: null,
  currentSong: null,
};

const PlayContext = createContext<[Model, React.Dispatch<SetStateAction<Model>>]>(
  [defaultModel, () => {}],
);

export function PlayProvider({ children } : { children?: React.ReactNode }) {
  const state = useState<Model>(defaultModel);

  return (
    <PlayContext.Provider value={state}>
      {children}
    </PlayContext.Provider>
  );
}

export default PlayContext;
