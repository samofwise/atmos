/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlaylistGroup = /* GraphQL */ `
  subscription OnCreatePlaylistGroup(
    $filter: ModelSubscriptionPlaylistGroupFilterInput
  ) {
    onCreatePlaylistGroup(filter: $filter) {
      id
      name
      Playlists {
        items {
          id
          name
          plays
          songs {
            id
            name
            uri
            image
            artist
            parentPlaylistId
          }
          sourcePlaylists {
            id
            name
            uri
            image
          }
          PlaylistGroup {
            id
            name
            Playlists {
              nextToken
            }
            createdAt
            updatedAt
          }
          playlistGroupId
          nextPlaylists {
            playlistId
            name
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlaylistGroup = /* GraphQL */ `
  subscription OnUpdatePlaylistGroup(
    $filter: ModelSubscriptionPlaylistGroupFilterInput
  ) {
    onUpdatePlaylistGroup(filter: $filter) {
      id
      name
      Playlists {
        items {
          id
          name
          plays
          songs {
            id
            name
            uri
            image
            artist
            parentPlaylistId
          }
          sourcePlaylists {
            id
            name
            uri
            image
          }
          PlaylistGroup {
            id
            name
            Playlists {
              nextToken
            }
            createdAt
            updatedAt
          }
          playlistGroupId
          nextPlaylists {
            playlistId
            name
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlaylistGroup = /* GraphQL */ `
  subscription OnDeletePlaylistGroup(
    $filter: ModelSubscriptionPlaylistGroupFilterInput
  ) {
    onDeletePlaylistGroup(filter: $filter) {
      id
      name
      Playlists {
        items {
          id
          name
          plays
          songs {
            id
            name
            uri
            image
            artist
            parentPlaylistId
          }
          sourcePlaylists {
            id
            name
            uri
            image
          }
          PlaylistGroup {
            id
            name
            Playlists {
              nextToken
            }
            createdAt
            updatedAt
          }
          playlistGroupId
          nextPlaylists {
            playlistId
            name
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlaylist = /* GraphQL */ `
  subscription OnCreatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onCreatePlaylist(filter: $filter) {
      id
      name
      plays
      songs {
        id
        name
        uri
        image
        artist
        parentPlaylistId
      }
      sourcePlaylists {
        id
        name
        uri
        image
      }
      PlaylistGroup {
        id
        name
        Playlists {
          items {
            id
            name
            plays
            songs {
              id
              name
              uri
              image
              artist
              parentPlaylistId
            }
            sourcePlaylists {
              id
              name
              uri
              image
            }
            PlaylistGroup {
              id
              name
              createdAt
              updatedAt
            }
            playlistGroupId
            nextPlaylists {
              playlistId
              name
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      playlistGroupId
      nextPlaylists {
        playlistId
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlaylist = /* GraphQL */ `
  subscription OnUpdatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onUpdatePlaylist(filter: $filter) {
      id
      name
      plays
      songs {
        id
        name
        uri
        image
        artist
        parentPlaylistId
      }
      sourcePlaylists {
        id
        name
        uri
        image
      }
      PlaylistGroup {
        id
        name
        Playlists {
          items {
            id
            name
            plays
            songs {
              id
              name
              uri
              image
              artist
              parentPlaylistId
            }
            sourcePlaylists {
              id
              name
              uri
              image
            }
            PlaylistGroup {
              id
              name
              createdAt
              updatedAt
            }
            playlistGroupId
            nextPlaylists {
              playlistId
              name
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      playlistGroupId
      nextPlaylists {
        playlistId
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlaylist = /* GraphQL */ `
  subscription OnDeletePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onDeletePlaylist(filter: $filter) {
      id
      name
      plays
      songs {
        id
        name
        uri
        image
        artist
        parentPlaylistId
      }
      sourcePlaylists {
        id
        name
        uri
        image
      }
      PlaylistGroup {
        id
        name
        Playlists {
          items {
            id
            name
            plays
            songs {
              id
              name
              uri
              image
              artist
              parentPlaylistId
            }
            sourcePlaylists {
              id
              name
              uri
              image
            }
            PlaylistGroup {
              id
              name
              createdAt
              updatedAt
            }
            playlistGroupId
            nextPlaylists {
              playlistId
              name
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      playlistGroupId
      nextPlaylists {
        playlistId
        name
      }
      createdAt
      updatedAt
    }
  }
`;
