/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaylistInput = {
  id?: string | null,
  name: string,
};

export type ModelPlaylistConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlaylistConditionInput | null > | null,
  or?: Array< ModelPlaylistConditionInput | null > | null,
  not?: ModelPlaylistConditionInput | null,
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

export type Playlist = {
  __typename: "Playlist",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlaylistInput = {
  id: string,
  name?: string | null,
};

export type DeletePlaylistInput = {
  id: string,
};

export type ModelPlaylistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlaylistFilterInput | null > | null,
  or?: Array< ModelPlaylistFilterInput | null > | null,
  not?: ModelPlaylistFilterInput | null,
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

export type ModelPlaylistConnection = {
  __typename: "ModelPlaylistConnection",
  items:  Array<Playlist | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPlaylistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaylistFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaylistFilterInput | null > | null,
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

export type CreatePlaylistMutationVariables = {
  input: CreatePlaylistInput,
  condition?: ModelPlaylistConditionInput | null,
};

export type CreatePlaylistMutation = {
  createPlaylist?:  {
    __typename: "Playlist",
    id: string,
    name: string,
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
    createdAt: string,
    updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
