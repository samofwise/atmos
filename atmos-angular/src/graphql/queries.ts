/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlaylistGroup = /* GraphQL */ `
  query GetPlaylistGroup($id: ID!) {
    getPlaylistGroup(id: $id) {
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
export const listPlaylistGroups = /* GraphQL */ `
  query ListPlaylistGroups(
    $filter: ModelPlaylistGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaylistGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlaylist = /* GraphQL */ `
  query GetPlaylist($id: ID!) {
    getPlaylist(id: $id) {
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
export const listPlaylists = /* GraphQL */ `
  query ListPlaylists(
    $filter: ModelPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
              id
              name
              plays
              playlistGroupId
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
      nextToken
    }
  }
`;
export const playlistsByPlaylistGroupId = /* GraphQL */ `
  query PlaylistsByPlaylistGroupId(
    $playlistGroupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playlistsByPlaylistGroupId(
      playlistGroupId: $playlistGroupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
              id
              name
              plays
              playlistGroupId
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
      nextToken
    }
  }
`;
