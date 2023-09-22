import PaginationContainer from "./components/PaginationContainer";
import { Table } from "antd";
import { useColumns } from "./constants.tsx";
import React, { Dispatch, SetStateAction } from "react";
import { IUser } from "@models/clientType.ts";

const CustomTable: React.FC<{
  setDrawerState: Dispatch<SetStateAction<"create" | "update" | "closed">>;
  setUserToUpdate: Dispatch<SetStateAction<IUser | undefined>>;
}> = ({ setDrawerState, setUserToUpdate }) => {
  const columns = useColumns(setDrawerState, setUserToUpdate);

  return (
    <PaginationContainer>
      {(props) => {
        const { users, page, setPage } = { ...props };
        return (
          <>
            <Table
              rowSelection={{ type: "checkbox" }}
              columns={columns}
              size="large"
              tableLayout="fixed"
              dataSource={users?.data}
              className="mx-3"
              pagination={{
                position: ["bottomLeft"],
                current: page,
                hideOnSinglePage: true,
                pageSize: users?.meta?.per_page,
                total: users?.meta?.total,
                onChange: (page) => {
                  setPage(page);
                },
              }}
              rowKey={(user) => user.id}
            />
          </>
        );
      }}
    </PaginationContainer>
  );
};

export default CustomTable;
