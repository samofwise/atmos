/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlaylistGroup = /* GraphQL */ `
  mutation CreatePlaylistGroup(
    $input: CreatePlaylistGroupInput!
    $condition: ModelPlaylistGroupConditionInput
  ) {
    createPlaylistGroup(input: $input, condition: $condition) {
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
export const updatePlaylistGroup = /* GraphQL */ `
  mutation UpdatePlaylistGroup(
    $input: UpdatePlaylistGroupInput!
    $condition: ModelPlaylistGroupConditionInput
  ) {
    updatePlaylistGroup(input: $input, condition: $condition) {
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
export const deletePlaylistGroup = /* GraphQL */ `
  mutation DeletePlaylistGroup(
    $input: DeletePlaylistGroupInput!
    $condition: ModelPlaylistGroupConditionInput
  ) {
    deletePlaylistGroup(input: $input, condition: $condition) {
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
export const createPlaylist = /* GraphQL */ `
  mutation CreatePlaylist(
    $input: CreatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    createPlaylist(input: $input, condition: $condition) {
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
export const updatePlaylist = /* GraphQL */ `
  mutation UpdatePlaylist(
    $input: UpdatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    updatePlaylist(input: $input, condition: $condition) {
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
export const deletePlaylist = /* GraphQL */ `
  mutation DeletePlaylist(
    $input: DeletePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    deletePlaylist(input: $input, condition: $condition) {
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
