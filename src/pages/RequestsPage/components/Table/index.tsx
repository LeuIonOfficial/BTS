import { GetFlightsType } from "@models/flights.ts";
import { Table } from "antd";
import { Dispatch, SetStateAction } from "react";
import PaginationContainer from "./components/PaginationContainer/index.tsx";
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
          <div className="overflow-hidden rounded-md bg-white shadow">
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
              scroll={{ x: 1300 }}
            />
          </div>
        );
      }}
    </PaginationContainer>
  );
};

export default CustomTable;
