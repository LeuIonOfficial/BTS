import { Table } from "antd";
import { useTableColumns } from "./constants.tsx";
import PaginationContainer from "./PaginationContainer";
import { IFlightsData } from "@models/clientType.ts";
import { Dispatch, SetStateAction } from "react";

const CustomTable = ({
  setSelectedRowElements,
}: {
  setSelectedRowElements: Dispatch<SetStateAction<IFlightsData[] | undefined>>;
}) => {
  const columns = useTableColumns();

  return (
    <PaginationContainer>
      {(props) => {
        return (
          <>
            <Table
              sticky={true}
              size="small"
              tableLayout="fixed"
              columns={columns}
              showHeader={true}
              dataSource={props.flights?.data || []}
              rowSelection={{
                type: "checkbox",
                onChange: (_, record: IFlightsData[]) => {
                  setSelectedRowElements(record);
                },
              }}
              pagination={{
                current: props.page,
                hideOnSinglePage: true,
                pageSize: props.flights?.meta?.per_page,
                total: props.flights?.meta?.total,
                onChange: (page) => {
                  console.log(page);
                  props.setPage(page);
                },
              }}
              rowKey="id"
              style={{ margin: "0 10px" }}
            ></Table>
          </>
        );
      }}
    </PaginationContainer>
  );
};

export default CustomTable;
