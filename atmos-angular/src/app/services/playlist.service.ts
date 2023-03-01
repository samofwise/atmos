import { Injectable } from '@angular/core';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API } from 'aws-amplify';
import { CreatePlaylistInput, GetPlaylistQuery, ListPlaylistsQuery, UpdatePlaylistInput } from '../../api/api';
import { createPlaylist as create, updatePlaylist as update, deletePlaylist as deleteMutation } from '../../graphql/mutations';
import { getPlaylist as getPlaylistQuery, listPlaylists } from '../../graphql/queries';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() { }

  getPlaylists = async () => (await API.graphql(
    { query: listPlaylists },
  ) as GraphQLResult<ListPlaylistsQuery>).data?.listPlaylists?.items;

  getPlaylist = async (id: string) => (await API.graphql({
    query: getPlaylistQuery,
    variables: { id },
  }) as GraphQLResult<GetPlaylistQuery>).data?.getPlaylist;

  createPlaylist = (input: CreatePlaylistInput) => API.graphql({
    query: create,
    variables: { input },
  });

  updatePlaylist = (input: UpdatePlaylistInput) => API.graphql({
    query: update,
    variables: { input },
  });

  deletePlaylist = (id: string) => API.graphql({
    query: deleteMutation,
    variables: { input: { id } },
  });
}
