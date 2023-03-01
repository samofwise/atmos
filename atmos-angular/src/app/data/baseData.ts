import { CreatePlaylistInput } from 'src/api/api';

const defPlaylist = {
  plays: 0,
  sourcePlaylists: [],
  nextPlaylists: []
}

const fillerSongs = [
  { id: '2p415JwFhYNRrrkrLMDqsi', name: 'Rannsaka', uri: 'spotify:track:2p415JwFhYNRrrkrLMDqsi', image: 'https://i.scdn.co/image/ab67616d0000b2738d69d27abe1dc1d44cc6a5de', artist: 'Valkyrion' },
  { artist: 'Everrune', id: '4weIErZIkaVBXqr48IWX4j', image: 'https://i.scdn.co/image/ab67616d0000b273b3327122c9b6f38f6b191cd7', name: 'Krugbu', uri: 'spotify:track:4weIErZIkaVBXqr48IWX4j' },
  { artist: 'Scorewizard', id: '4tC4VYyabAhJ4RinIRC9jR', image: 'https://i.scdn.co/image/ab67616d0000b2731cda8a828fdd1fdb94808ca7', name: 'Mutiny', uri: 'spotify:track:4tC4VYyabAhJ4RinIRC9jR' },
  { artist: 'Celestial Aeon Project, Everrune', id: '2AFUqcYoolgEIFrlOtvSw9', image: 'https://i.scdn.co/image/ab67616d0000b27337db285f2137d8b877cd4d6d', name: 'Battlefield', uri: 'spotify:track:2AFUqcYoolgEIFrlOtvSw9' },
]

export const baseFillerPlaylists = [
  { name: 'Ambient', ...defPlaylist, songs: fillerSongs },
  { name: 'Exiting', ...defPlaylist, songs: fillerSongs },
  { name: 'Battle', ...defPlaylist, songs: fillerSongs }
]

const baseData = [
  {
    name: 'General',
    playlists: baseFillerPlaylists
  },
  {
    name: 'Tavern',
    playlists: [
      { name: 'Quiet', ...defPlaylist, songs: fillerSongs },
      { name: 'Medium', ...defPlaylist, songs: fillerSongs },
      { name: 'Busy', ...defPlaylist, songs: fillerSongs },
      { name: 'Battle', ...defPlaylist, songs: fillerSongs }
    ]
  },
  {
    name: 'City',
    playlists: [
      { name: 'Quiet', ...defPlaylist, songs: fillerSongs },
      { name: 'Medium', ...defPlaylist, songs: fillerSongs },
      { name: 'Busy', ...defPlaylist, songs: fillerSongs },
      { name: 'Battle', ...defPlaylist, songs: fillerSongs }
    ]
  },
  {
    name: 'Caves',
    playlists: [
      { name: 'Ambient', ...defPlaylist, songs: fillerSongs },
      { name: 'Exciting', ...defPlaylist, songs: fillerSongs },
      { name: 'Creepy', ...defPlaylist, songs: fillerSongs },
    ]
  },

];

export default baseData;