import { Api } from "../api";
import { IPostFlightsType } from "@models/postFlightsType.ts";
import { useMutation } from "@tanstack/react-query";

const usePostFlight = () => {
  const mutation = async ({
    id,
    form,
  }: {
    id?: string;
    form: IPostFlightsType;
  }) => {
    return Api.flights.postFlight(id, form);
  };

  const { data: response, mutateAsync: createFlightRequest } = useMutation(
    mutation,
    {
      onSuccess: (res) => {
        console.log(res);
      },
    },
  );

  return {
    response,
    createFlightRequest,
  };
};

export default usePostFlight;
