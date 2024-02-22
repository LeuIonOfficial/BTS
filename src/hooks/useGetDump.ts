import { Api } from '@api/index.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useGetDump = () => {
  const mutation = async ({ flightId, data }) => {
    return Api.flights.getPostDump(flightId, data);
  };

  const { data: response, mutateAsync: postGetDump } = useMutation(mutation, {
    onSuccess: () => {
      return response?.data.data;
    },
  });

  return {
    response,
    postGetDump,
  };
};

export default useGetDump;
