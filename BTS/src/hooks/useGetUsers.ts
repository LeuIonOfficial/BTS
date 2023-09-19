import { Api } from "../api";
import { useQuery } from "@tanstack/react-query";

const useGetUsers = (page?: number, perPage?: number) => {
  const query = () => Api.users.getUsers(page, perPage);

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
