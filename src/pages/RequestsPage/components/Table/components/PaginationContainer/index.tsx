import { Dispatch, FC, ReactElement, SetStateAction, useState } from 'react';
import { useGetFlights } from '@hooks/index.ts';
import { GetFlightsType } from '@models/flights.ts';
import { ServerResponseType } from '@models/serverResponse.ts';

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  flights: ServerResponseType<GetFlightsType> | undefined;
};

const PaginationContainer: FC<{
  children: (props: PaginationProps) => ReactElement;
}> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const { flights } = useGetFlights(page, 10);
  return children({ page, setPage, flights });
};

export default PaginationContainer;
