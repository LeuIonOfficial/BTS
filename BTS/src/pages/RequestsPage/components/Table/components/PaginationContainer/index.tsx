import { Dispatch, FC, ReactElement, SetStateAction, useState } from "react";
import { useGetFlights } from "@hooks/index.ts";
import { IFlightsData } from "@models/clientType.ts";
import { IServerDataResponse } from "@models/serverDataResponse.ts";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  flights: IServerDataResponse<IFlightsData>;
};

const PaginationContainer: FC<{
  children: (props: PaginationProps) => ReactElement;
}> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const { flights } = useGetFlights(page, 10);
  return children({ page, setPage, flights });
};

export default PaginationContainer;
