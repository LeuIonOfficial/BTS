import { Api } from '@api/index.ts';
import { useMutation } from '@tanstack/react-query';

const useGetDump = () => {
  const mutation = async ({ flightId, data }) => {
    return Api.flights.getPostDump(flightId, data);
  };

  const { data: response, mutateAsync: postGetDump } = useMutation(mutation, {
    onSuccess: () => response?.data.data,
  });

  return {
    response,
    postGetDump,
  };
};

export default useGetDump;
