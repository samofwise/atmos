/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlaylistGroup = /* GraphQL */ `
  subscription OnCreatePlaylistGroup(
    $filter: ModelSubscriptionPlaylistGroupFilterInput
    $owner: String
  ) {
    onCreatePlaylistGroup(filter: $filter, owner: $owner) {
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
            owner
          }
          playlistGroupId
          nextPlaylists {
            playlistId
            name
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePlaylistGroup = /* GraphQL */ `
  subscription OnUpdatePlaylistGroup(
    $filter: ModelSubscriptionPlaylistGroupFilterInput
    $owner: String
  ) {
    onUpdatePlaylistGroup(filter: $filter, owner: $owner) {
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
            owner
          }
          playlistGroupId
          nextPlaylists {
            playlistId
            name
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePlaylistGroup = /* GraphQL */ `
  subscription OnDeletePlaylistGroup(
    $filter: ModelSubscriptionPlaylistGroupFilterInput
    $owner: String
  ) {
    onDeletePlaylistGroup(filter: $filter, owner: $owner) {
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
            owner
          }
          playlistGroupId
          nextPlaylists {
            playlistId
            name
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePlaylist = /* GraphQL */ `
  subscription OnCreatePlaylist(
    $filter: ModelSubscriptionPlaylistFilterInput
    $owner: String
  ) {
    onCreatePlaylist(filter: $filter, owner: $owner) {
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
              owner
            }
            playlistGroupId
            nextPlaylists {
              playlistId
              name
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      playlistGroupId
      nextPlaylists {
        playlistId
        name
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePlaylist = /* GraphQL */ `
  subscription OnUpdatePlaylist(
    $filter: ModelSubscriptionPlaylistFilterInput
    $owner: String
  ) {
    onUpdatePlaylist(filter: $filter, owner: $owner) {
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
              owner
            }
            playlistGroupId
            nextPlaylists {
              playlistId
              name
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      playlistGroupId
      nextPlaylists {
        playlistId
        name
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePlaylist = /* GraphQL */ `
  subscription OnDeletePlaylist(
    $filter: ModelSubscriptionPlaylistFilterInput
    $owner: String
  ) {
    onDeletePlaylist(filter: $filter, owner: $owner) {
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
              owner
            }
            playlistGroupId
            nextPlaylists {
              playlistId
              name
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      playlistGroupId
      nextPlaylists {
        playlistId
        name
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
