import { Api } from "../api";
import { useQuery } from "@tanstack/react-query";

const useGetUsers = () => {
  const query = () => Api.users.getUsers();

  const {
    isLoading,
    data: users,
    isSuccess,
  } = useQuery(["users"], query, {
    select: (response) => {
      return response;
    },
  });

  return {
    isLoading,
    isSuccess,
    users,
  };
};

export default useGetUsers;
