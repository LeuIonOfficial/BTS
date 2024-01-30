import { Api } from '../api';
import { useQuery } from '@tanstack/react-query';

const useGetFlights = (page: number, perPage: number) => {
  const query = () => Api.flights.getFlights({ page: page, per_page: perPage });

  const { isLoading, data: flights, isSuccess } = useQuery(['flights', page, perPage], query, {
    select: (response) => {
      return response.data;
    },
  });

  return {
    isLoading,
    isSuccess,
    flights,
  };
};

export default useGetFlights;
