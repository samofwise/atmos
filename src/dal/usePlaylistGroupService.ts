// TODO: Fix Later
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API } from 'aws-amplify';
import {
  CreatePlaylistGroupInput,
  CreatePlaylistGroupMutation,
  GetPlaylistGroupQuery,
  ListPlaylistGroupsQuery,
  PlaylistGroup,
  UpdatePlaylistGroupInput,
  UpdatePlaylistGroupMutation,
} from '../api/api';
import { createPlaylistGroup as create, updatePlaylistGroup as update, deletePlaylistGroup as deleteMutation } from '../graphql/mutations';
import { listPlaylistGroups, getPlaylistGroup as getPlaylistGroupQuery } from '../graphql/queries';

const usePlaylistGroupService = () => {
  // useContext get is not authed and use local storage

  const getPlaylistGroups = async () => ((await API.graphql({
    query: listPlaylistGroups,
  // eslint-disable-next-line max-len
  }) as GraphQLResult<ListPlaylistGroupsQuery>).data?.listPlaylistGroups?.items ?? []) as PlaylistGroup[];

  const getPlaylistGroup = async (id: string) => ((await API.graphql({
    query: getPlaylistGroupQuery,
    variables: { id },
  }) as GraphQLResult<GetPlaylistGroupQuery>).data?.getPlaylistGroup ?? {}) as PlaylistGroup;

  const createPlaylistGroup = async (input: CreatePlaylistGroupInput) => (API.graphql({
    query: create,
    variables: { input },
  }) as GraphQLResult<CreatePlaylistGroupMutation>).data?.createPlaylistGroup as PlaylistGroup;

  const updatePlaylistGroup = async (input: UpdatePlaylistGroupInput) => (await API.graphql({
    query: update,
    variables: { input },
  }) as GraphQLResult<UpdatePlaylistGroupMutation>).data?.updatePlaylistGroup as PlaylistGroup;

  const deletePlaylistGroup = (id: string) => API.graphql({
    query: deleteMutation,
    variables: { input: { id } },
  });

  return {
    getPlaylistGroups,
    getPlaylistGroup,
    createPlaylistGroup,
    updatePlaylistGroup,
    deletePlaylistGroup,
  };
};

export default usePlaylistGroupService;
