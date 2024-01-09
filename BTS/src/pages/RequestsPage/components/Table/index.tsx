import { GetFlightsType } from "@models/flights.ts";
import { Table } from "antd";
import { Dispatch, SetStateAction } from "react";
import PaginationContainer from "./components/PaginationContainer";
import { useTableColumns } from "./constants.tsx";

const CustomTable = ({
  setSelectedRowElements,
}: {
  setSelectedRowElements: Dispatch<
    SetStateAction<GetFlightsType[] | undefined>
  >;
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
                onChange: (_, record: GetFlightsType[]) => {
                  setSelectedRowElements(record);
                },
              }}
              pagination={{
                position: ["bottomLeft"],
                current: props.page,
                hideOnSinglePage: true,
                pageSize: props.flights?.meta?.per_page,
                total: props.flights?.meta?.total,
                onChange: (page) => {
                  props.setPage(page);
                },
              }}
              rowKey="id"
              className="mx-3"
              scroll={{ x: 1300 }}
            />
          </>
        );
      }}
    </PaginationContainer>
  );
};

export default CustomTable;
