import { API } from "aws-amplify";
import { CreatePlaylistGroupInput, GetPlaylistGroupQuery, ListPlaylistGroupsQuery, UpdatePlaylistGroupInput } from "../api/api";
import { createPlaylistGroup as create, updatePlaylistGroup as update, deletePlaylistGroup as deleteMutation } from '../graphql/mutations';
import { listPlaylistGroups, getPlaylistGroup as getPlaylistGroupQuery } from "../graphql/queries";

const usePlaylistGroupService = () => {
  //useContext get is not authed and use local storage

  const getPlaylistGroups = () => API.graphql({
    query: listPlaylistGroups
  }) as Promise<ListPlaylistGroupsQuery>;

  const getPlaylistGroup = (id: string) => API.graphql({
    query: getPlaylistGroupQuery,
    variables: { id }
  }) as Promise<GetPlaylistGroupQuery>;

  const createPlaylistGroup = (input: CreatePlaylistGroupInput) => API.graphql({
    query: create,
    variables: {
      input
    }
  });

  const updatePlaylistGroup = (input: UpdatePlaylistGroupInput) => API.graphql({
    query: update,
    variables: {
      input
    }
  });

  const deletePlaylistGroup = (id: string) => API.graphql({
    query: deleteMutation,
    variables: {
        input: { id }
    }
  });

  return {getPlaylistGroups, getPlaylistGroup, createPlaylistGroup, updatePlaylistGroup, deletePlaylistGroup};
}

export default usePlaylistGroupService