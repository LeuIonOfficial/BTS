import { Api } from '@api/index.ts';
import { useQuery } from '@tanstack/react-query';

interface MilesPriceType {
  id: number;
  name: string;
  price: number;
  created_at: string;
  updated_at: string;
}

const useGetMilesPrices = () => {
  const query = () => Api.offer.getMilesPrices<MilesPriceType[]>();

  const { isLoading, data } = useQuery(['mileage-prices'], query, {
    select: (response) => {
      return response.data.data;
    },
  });

  return {
    data,
    isLoading,
  };
};

export default useGetMilesPrices;
