import { Api } from "../api";
import { useQuery } from "@tanstack/react-query";

const useGetUsers = (page: number, perPage: number) => {
  const query = () => Api.users.getUsers({ page: page, per_page: perPage });

  const {
    isLoading,
    data: users,
    isSuccess,
  } = useQuery(["users", page, perPage], query, {
    select: (response) => {
      return response.data;
    },
  });

  return {
    isLoading,
    isSuccess,
    users,
  };
};

export default useGetUsers;
