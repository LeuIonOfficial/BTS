import { Dispatch, FC, ReactElement, SetStateAction, useState } from "react";
import useGetSales from "@hooks/useGetSales.ts";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  sales: SetStateAction<any>;
};

const PaginationContainer: FC<{
  children: (props: PaginationProps) => ReactElement;
}> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const { sales } = useGetSales(page, 10);

  return children({ page, setPage, sales });
};

export default PaginationContainer;
