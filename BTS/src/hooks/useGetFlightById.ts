import { Api } from "../api";
import { useQuery } from "@tanstack/react-query";

const useGetFlightById = (id?: string | undefined) => {
  const query = () => Api.flights.getFlightById(id);

  const {
    isLoading,
    data: flightDetails,
    error,
  } = useQuery(["flightDetails"], query, {
    select: (response) => {
      return response.data.data;
    },
  });

  return {
    isLoading,
    flightDetails,
    error,
  };
};

export default useGetFlightById;
