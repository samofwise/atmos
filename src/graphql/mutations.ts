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
          playlistGroupId
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
          playlistGroupId
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
          playlistGroupId
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
      }
      playlistGroupId
      PlaylistGroup {
        id
        name
        Playlists {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextPlaylists {
        id
        name
      }
      createdAt
      updatedAt
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
      }
      playlistGroupId
      PlaylistGroup {
        id
        name
        Playlists {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextPlaylists {
        id
        name
      }
      createdAt
      updatedAt
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
      }
      playlistGroupId
      PlaylistGroup {
        id
        name
        Playlists {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextPlaylists {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
