import { Api } from "../api";
import { useQuery } from "@tanstack/react-query";

const useGetSales = (page: number, perPage: number) => {
  const query = () => Api.sales.getSales({ page: page, per_page: perPage });

  const {
    isLoading,
    data: sales,
    isSuccess,
  } = useQuery(["sales", page, perPage], query, {
    select: (res) => res.data,
  });

  return {
    isLoading,
    sales,
    isSuccess,
  };
};

export default useGetSales;
