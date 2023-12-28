import { Api } from "@api/index.ts";
import { useQuery } from "@tanstack/react-query";

const useGetOffers = (id: string) => {
  const query = () => {
    return Api.offer.getOffers(id);
  };

  const { isLoading, data: offers } = useQuery(["offers"], query, {
    select: (response) => {
      return response.data.data;
    },
  });

  return {
    isLoading,
    offers,
  };
};

export default useGetOffers;
