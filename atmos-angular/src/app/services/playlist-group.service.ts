import { Injectable } from '@angular/core';
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
} from '../../api/api';
import { createPlaylistGroup as create, updatePlaylistGroup as update, deletePlaylistGroup as deleteMutation } from '../../graphql/mutations';
import { listPlaylistGroups, getPlaylistGroup as getPlaylistGroupQuery } from '../../graphql/queries';

@Injectable({
  providedIn: 'root'
})
export class PlaylistGroupService {
  //Im not sure if this format is "allowed", I personally like it
  getPlaylistGroups = async () => ((await API.graphql({
    query: listPlaylistGroups,
  }) as GraphQLResult<ListPlaylistGroupsQuery>).data?.listPlaylistGroups?.items ?? []) as PlaylistGroup[];

  getPlaylistGroup = async (id: string) => ((await API.graphql({
    query: getPlaylistGroupQuery,
    variables: { id },
  }) as GraphQLResult<GetPlaylistGroupQuery>).data?.getPlaylistGroup ?? {}) as PlaylistGroup;

  createPlaylistGroup = async (input: CreatePlaylistGroupInput) => (await API.graphql({
    query: create,
    variables: { input },
  }) as GraphQLResult<CreatePlaylistGroupMutation>).data?.createPlaylistGroup as PlaylistGroup;

  updatePlaylistGroup = async (input: UpdatePlaylistGroupInput) => (await API.graphql({
    query: update,
    variables: { input },
  }) as GraphQLResult<UpdatePlaylistGroupMutation>).data?.updatePlaylistGroup as PlaylistGroup;

  deletePlaylistGroup = (id: string) => API.graphql({
    query: deleteMutation,
    variables: { input: { id } },
  });
}
