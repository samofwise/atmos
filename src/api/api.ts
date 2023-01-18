/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaylistGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelPlaylistGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlaylistGroupConditionInput | null > | null,
  or?: Array< ModelPlaylistGroupConditionInput | null > | null,
  not?: ModelPlaylistGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type PlaylistGroup = {
  __typename: "PlaylistGroup",
  id: string,
  name: string,
  Playlists?: ModelPlaylistConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPlaylistConnection = {
  __typename: "ModelPlaylistConnection",
  items:  Array<Playlist | null >,
  nextToken?: string | null,
};

export type Playlist = {
  __typename: "Playlist",
  id: string,
  name: string,
  plays?: number | null,
  songs?:  Array<Song | null > | null,
  playlistGroupId: string,
  PlaylistGroup?: PlaylistGroup | null,
  nextPlaylists:  Array<NextPlaylist | null >,
  createdAt: string,
  updatedAt: string,
};

export type Song = {
  __typename: "Song",
  id?: number | null,
  name: string,
};

export type NextPlaylist = {
  __typename: "NextPlaylist",
  id?: string | null,
  name?: string | null,
};

export type UpdatePlaylistGroupInput = {
  id: string,
  name?: string | null,
};

export type DeletePlaylistGroupInput = {
  id: string,
};

export type CreatePlaylistInput = {
  id?: string | null,
  name: string,
  plays?: number | null,
  songs?: Array< SongInput | null > | null,
  playlistGroupId: string,
  nextPlaylists: Array< NextPlaylistInput | null >,
};

export type SongInput = {
  id?: number | null,
  name: string,
};

export type NextPlaylistInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelPlaylistConditionInput = {
  name?: ModelStringInput | null,
  plays?: ModelIntInput | null,
  playlistGroupId?: ModelIDInput | null,
  and?: Array< ModelPlaylistConditionInput | null > | null,
  or?: Array< ModelPlaylistConditionInput | null > | null,
  not?: ModelPlaylistConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePlaylistInput = {
  id: string,
  name?: string | null,
  plays?: number | null,
  songs?: Array< SongInput | null > | null,
  playlistGroupId?: string | null,
  nextPlaylists?: Array< NextPlaylistInput | null > | null,
};

export type DeletePlaylistInput = {
  id: string,
};

export type ModelPlaylistGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlaylistGroupFilterInput | null > | null,
  or?: Array< ModelPlaylistGroupFilterInput | null > | null,
  not?: ModelPlaylistGroupFilterInput | null,
};

export type ModelPlaylistGroupConnection = {
  __typename: "ModelPlaylistGroupConnection",
  items:  Array<PlaylistGroup | null >,
  nextToken?: string | null,
};

export type ModelPlaylistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  plays?: ModelIntInput | null,
  playlistGroupId?: ModelIDInput | null,
  and?: Array< ModelPlaylistFilterInput | null > | null,
  or?: Array< ModelPlaylistFilterInput | null > | null,
  not?: ModelPlaylistFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionPlaylistGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaylistGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaylistGroupFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPlaylistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  plays?: ModelSubscriptionIntInput | null,
  playlistGroupId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPlaylistFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaylistFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreatePlaylistGroupMutationVariables = {
  input: CreatePlaylistGroupInput,
  condition?: ModelPlaylistGroupConditionInput | null,
};

export type CreatePlaylistGroupMutation = {
  createPlaylistGroup?:  {
    __typename: "PlaylistGroup",
    id: string,
    name: string,
    Playlists?:  {
      __typename: "ModelPlaylistConnection",
      items:  Array< {
        __typename: "Playlist",
        id: string,
        name: string,
        plays?: number | null,
        playlistGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaylistGroupMutationVariables = {
  input: UpdatePlaylistGroupInput,
  condition?: ModelPlaylistGroupConditionInput | null,
};

export type UpdatePlaylistGroupMutation = {
  updatePlaylistGroup?:  {
    __typename: "PlaylistGroup",
    id: string,
    name: string,
    Playlists?:  {
      __typename: "ModelPlaylistConnection",
      items:  Array< {
        __typename: "Playlist",
        id: string,
        name: string,
        plays?: number | null,
        playlistGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaylistGroupMutationVariables = {
  input: DeletePlaylistGroupInput,
  condition?: ModelPlaylistGroupConditionInput | null,
};

export type DeletePlaylistGroupMutation = {
  deletePlaylistGroup?:  {
    __typename: "PlaylistGroup",
    id: string,
    name: string,
    Playlists?:  {
      __typename: "ModelPlaylistConnection",
      items:  Array< {
        __typename: "Playlist",
        id: string,
        name: string,
        plays?: number | null,
        playlistGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlaylistMutationVariables = {
  input: CreatePlaylistInput,
  condition?: ModelPlaylistConditionInput | null,
};

export type CreatePlaylistMutation = {
  createPlaylist?:  {
    __typename: "Playlist",
    id: string,
    name: string,
    plays?: number | null,
    songs?:  Array< {
      __typename: "Song",
      id?: number | null,
      name: string,
    } | null > | null,
    playlistGroupId: string,
    PlaylistGroup?:  {
      __typename: "PlaylistGroup",
      id: string,
      name: string,
      Playlists?:  {
        __typename: "ModelPlaylistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    nextPlaylists:  Array< {
      __typename: "NextPlaylist",
      id?: string | null,
      name?: string | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaylistMutationVariables = {
  input: UpdatePlaylistInput,
  condition?: ModelPlaylistConditionInput | null,
};

export type UpdatePlaylistMutation = {
  updatePlaylist?:  {
    __typename: "Playlist",
    id: string,
    name: string,
    plays?: number | null,
    songs?:  Array< {
      __typename: "Song",
      id?: number | null,
      name: string,
    } | null > | null,
    playlistGroupId: string,
    PlaylistGroup?:  {
      __typename: "PlaylistGroup",
      id: string,
      name: string,
      Playlists?:  {
        __typename: "ModelPlaylistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    nextPlaylists:  Array< {
      __typename: "NextPlaylist",
      id?: string | null,
      name?: string | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaylistMutationVariables = {
  input: DeletePlaylistInput,
  condition?: ModelPlaylistConditionInput | null,
};

export type DeletePlaylistMutation = {
  deletePlaylist?:  {
    __typename: "Playlist",
    id: string,
    name: string,
    plays?: number | null,
    songs?:  Array< {
      __typename: "Song",
      id?: number | null,
      name: string,
    } | null > | null,
    playlistGroupId: string,
    PlaylistGroup?:  {
      __typename: "PlaylistGroup",
      id: string,
      name: string,
      Playlists?:  {
        __typename: "ModelPlaylistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    nextPlaylists:  Array< {
      __typename: "NextPlaylist",
      id?: string | null,
      name?: string | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlaylistGroupQueryVariables = {
  id: string,
};

export type GetPlaylistGroupQuery = {
  getPlaylistGroup?:  {
    __typename: "PlaylistGroup",
    id: string,
    name: string,
    Playlists?:  {
      __typename: "ModelPlaylistConnection",
      items:  Array< {
        __typename: "Playlist",
        id: string,
        name: string,
        plays?: number | null,
        playlistGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlaylistGroupsQueryVariables = {
  filter?: ModelPlaylistGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlaylistGroupsQuery = {
  listPlaylistGroups?:  {
    __typename: "ModelPlaylistGroupConnection",
    items:  Array< {
      __typename: "PlaylistGroup",
      id: string,
      name: string,
      Playlists?:  {
        __typename: "ModelPlaylistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlaylistQueryVariables = {
  id: string,
};

export type GetPlaylistQuery = {
  getPlaylist?:  {
    __typename: "Playlist",
    id: string,
    name: string,
    plays?: number | null,
    songs?:  Array< {
      __typename: "Song",
      id?: number | null,
      name: string,
    } | null > | null,
    playlistGroupId: string,
    PlaylistGroup?:  {
      __typename: "PlaylistGroup",
      id: string,
      name: string,
      Playlists?:  {
        __typename: "ModelPlaylistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    nextPlaylists:  Array< {
      __typename: "NextPlaylist",
      id?: string | null,
      name?: string | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlaylistsQueryVariables = {
  filter?: ModelPlaylistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlaylistsQuery = {
  listPlaylists?:  {
    __typename: "ModelPlaylistConnection",
    items:  Array< {
      __typename: "Playlist",
      id: string,
      name: string,
      plays?: number | null,
      songs?:  Array< {
        __typename: "Song",
        id?: number | null,
        name: string,
      } | null > | null,
      playlistGroupId: string,
      PlaylistGroup?:  {
        __typename: "PlaylistGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      nextPlaylists:  Array< {
        __typename: "NextPlaylist",
        id?: string | null,
        name?: string | null,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlaylistsByPlaylistGroupIdQueryVariables = {
  playlistGroupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlaylistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlaylistsByPlaylistGroupIdQuery = {
  playlistsByPlaylistGroupId?:  {
    __typename: "ModelPlaylistConnection",
    items:  Array< {
      __typename: "Playlist",
      id: string,
      name: string,
      plays?: number | null,
      songs?:  Array< {
        __typename: "Song",
        id?: number | null,
        name: string,
      } | null > | null,
      playlistGroupId: string,
      PlaylistGroup?:  {
        __typename: "PlaylistGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      nextPlaylists:  Array< {
        __typename: "NextPlaylist",
        id?: string | null,
        name?: string | null,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlaylistGroupSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistGroupFilterInput | null,
};

export type OnCreatePlaylistGroupSubscription = {
  onCreatePlaylistGroup?:  {
    __typename: "PlaylistGroup",
    id: string,
    name: string,
    Playlists?:  {
      __typename: "ModelPlaylistConnection",
      items:  Array< {
        __typename: "Playlist",
        id: string,
        name: string,
        plays?: number | null,
        playlistGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaylistGroupSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistGroupFilterInput | null,
};

export type OnUpdatePlaylistGroupSubscription = {
  onUpdatePlaylistGroup?:  {
    __typename: "PlaylistGroup",
    id: string,
    name: string,
    Playlists?:  {
      __typename: "ModelPlaylistConnection",
      items:  Array< {
        __typename: "Playlist",
        id: string,
        name: string,
        plays?: number | null,
        playlistGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaylistGroupSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistGroupFilterInput | null,
};

export type OnDeletePlaylistGroupSubscription = {
  onDeletePlaylistGroup?:  {
    __typename: "PlaylistGroup",
    id: string,
    name: string,
    Playlists?:  {
      __typename: "ModelPlaylistConnection",
      items:  Array< {
        __typename: "Playlist",
        id: string,
        name: string,
        plays?: number | null,
        playlistGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaylistSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistFilterInput | null,
};

export type OnCreatePlaylistSubscription = {
  onCreatePlaylist?:  {
    __typename: "Playlist",
    id: string,
    name: string,
    plays?: number | null,
    songs?:  Array< {
      __typename: "Song",
      id?: number | null,
      name: string,
    } | null > | null,
    playlistGroupId: string,
    PlaylistGroup?:  {
      __typename: "PlaylistGroup",
      id: string,
      name: string,
      Playlists?:  {
        __typename: "ModelPlaylistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    nextPlaylists:  Array< {
      __typename: "NextPlaylist",
      id?: string | null,
      name?: string | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaylistSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistFilterInput | null,
};

export type OnUpdatePlaylistSubscription = {
  onUpdatePlaylist?:  {
    __typename: "Playlist",
    id: string,
    name: string,
    plays?: number | null,
    songs?:  Array< {
      __typename: "Song",
      id?: number | null,
      name: string,
    } | null > | null,
    playlistGroupId: string,
    PlaylistGroup?:  {
      __typename: "PlaylistGroup",
      id: string,
      name: string,
      Playlists?:  {
        __typename: "ModelPlaylistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    nextPlaylists:  Array< {
      __typename: "NextPlaylist",
      id?: string | null,
      name?: string | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaylistSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistFilterInput | null,
};

export type OnDeletePlaylistSubscription = {
  onDeletePlaylist?:  {
    __typename: "Playlist",
    id: string,
    name: string,
    plays?: number | null,
    songs?:  Array< {
      __typename: "Song",
      id?: number | null,
      name: string,
    } | null > | null,
    playlistGroupId: string,
    PlaylistGroup?:  {
      __typename: "PlaylistGroup",
      id: string,
      name: string,
      Playlists?:  {
        __typename: "ModelPlaylistConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    nextPlaylists:  Array< {
      __typename: "NextPlaylist",
      id?: string | null,
      name?: string | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
