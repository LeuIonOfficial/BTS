import { Dispatch, FC, ReactElement, SetStateAction, useState } from "react";
import useGetUsers from "@hooks/useGetUsers.ts";
import { IUser } from "@models/clientType.ts";
import { ServerResponseType } from "@models/serverResponse.ts";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  users: ServerResponseType<IUser>;
};

const PaginationContainer: FC<{
  children: (props: PaginationProps) => ReactElement;
}> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const { users } = useGetUsers(page, 10);
  return children({ page, setPage, users });
};

export default PaginationContainer;
