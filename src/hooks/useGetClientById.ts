import { Api } from '@api/index.ts';
import { useQuery } from '@tanstack/react-query';

const useGetClientById = (clientId?: number) => {
  const query = () => Api.client.getClientById(clientId);

  const { isLoading, data: clientDetails, error } = useQuery(['client'], query, {
    select: (response) => {
      return response?.data.data;
    },
    enabled: !!clientId,
  });

  return {
    isLoading,
    error,
    clientDetails,
  };
};

export default useGetClientById;
