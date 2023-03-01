import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API } from 'aws-amplify';
import { CreatePlaylistInput, GetPlaylistQuery, ListPlaylistsQuery, UpdatePlaylistInput } from '../api/api';
import { createPlaylist as create, updatePlaylist as update, deletePlaylist as deleteMutation } from '../graphql/mutations';
import { getPlaylist as getPlaylistQuery, listPlaylists } from '../graphql/queries';

const usePlaylistService = () => {
  // const { authenticated } = useContext(AuthContext);

  const getPlaylists = async () => (await API.graphql(
    { query: listPlaylists },
  ) as GraphQLResult<ListPlaylistsQuery>).data?.listPlaylists?.items;

  const getPlaylist = async (id: string) => (await API.graphql({
    query: getPlaylistQuery,
    variables: { id },
  }) as GraphQLResult<GetPlaylistQuery>).data?.getPlaylist;

  const createPlaylist = (input: CreatePlaylistInput) => API.graphql({
    query: create,
    variables: { input },
  });

  const updatePlaylist = (input: UpdatePlaylistInput) => API.graphql({
    query: update,
    variables: { input },
  });

  const deletePlaylist = (id: string) => API.graphql({
    query: deleteMutation,
    variables: { input: { id } },
  });

  return { getPlaylists, getPlaylist, createPlaylist, updatePlaylist, deletePlaylist };
};

export default usePlaylistService;
