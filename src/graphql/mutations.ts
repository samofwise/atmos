/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlaylist = /* GraphQL */ `
  mutation CreatePlaylist(
    $input: CreatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    createPlaylist(input: $input, condition: $condition) {
      id
      name
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
      createdAt
      updatedAt
    }
  }
`;
