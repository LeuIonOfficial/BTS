import { Api } from '../api';
import { PostFlightType } from '@models/flights.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePostFlight = () => {
  const mutation = async (data: PostFlightType) => {
    return Api.flights.postFlight(data);
  };

  const client = useQueryClient();

  const { data: response, mutateAsync: postFlightRequest } = useMutation(mutation, {
    onSuccess: async () => {
      await client.invalidateQueries(['flights']);
    },
  });

  return {
    response,
    postFlightRequest,
  };
};

export default usePostFlight;
