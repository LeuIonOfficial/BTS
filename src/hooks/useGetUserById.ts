import { Api } from '@api/index.ts';
import { useQuery } from '@tanstack/react-query';

const useGetUserById = (userId?: number) => {
  const query = () => Api.users.getUserById(userId);

  const { isLoading, data: userDetails, error } = useQuery(['user'], query, {
    select: (response) => {
      return response.data.data;
    },
    enabled: !!userId,
  });

  return {
    isLoading,
    userDetails,
    error,
  };
};

export default useGetUserById;
