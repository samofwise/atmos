import { API } from "aws-amplify";
import { CreatePlaylistInput, UpdatePlaylistInput } from "../api/api";
import { createPlaylist as create, updatePlaylist as update, deletePlaylist as deleteMutation} from '../graphql/mutations';
import { getPlaylist as getPlaylistQuery, listPlaylists } from "../graphql/queries";


const usePlaylistService = () => {

  const getPlaylists = () => API.graphql({
    query: listPlaylists
  });

  const getPlaylist = (id: string) => API.graphql({
    query: getPlaylistQuery,
    variables: { id }
  });

  const createPlaylist = (input: CreatePlaylistInput) => API.graphql({
    query: create,
    variables: {
      input
    }
  });

  const updatePlaylist = (input: UpdatePlaylistInput) => API.graphql({
    query: update,
    variables: {
      input
    }
  });

  const deletePlaylist = (id: string) => API.graphql({
    query: deleteMutation,
    variables: {
        input: { id }
    }
  });

  return {getPlaylists, getPlaylist, createPlaylist, updatePlaylist, deletePlaylist}
}

export default usePlaylistService