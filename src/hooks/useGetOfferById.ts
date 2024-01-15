import { Api } from "@api/index.ts";
import { useQuery } from "@tanstack/react-query";

const useGetOfferById = (id: string) => {
  const query = () => {
    return Api.offer.getOfferById(id);
  };

  const { isLoading, data } = useQuery(["offer"], query, {
    select: (response) => {
      return response.data;
    },
  });

  return {
    isLoading,
    data,
  };
};

export default useGetOfferById;
