import { Dispatch, FC, ReactElement, SetStateAction, useState } from "react";
import { useGetFlights } from "@hooks/index.ts";
import { IFlightsData } from "@models/clientType.ts";

export interface IServerDataResponse<T> {
  data: T[];
  links: {
    first: string;
    last: string;
    next: string;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
    links: {
      url: string;
      label: string;
      active: boolean;
    }[];
  };
}

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
  console.log(flights);
  return children({ page, setPage, flights });
};

export default PaginationContainer;
