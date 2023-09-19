import PaginationContainer from "./components/PaginationContainer";
import { Table } from "antd";
import { useColumns } from "./constants.tsx";

const CustomTable = () => {
  const columns = useColumns();
  return (
    <PaginationContainer>
      {(props) => {
        return (
          <>
            <Table
              rowSelection={{ type: "checkbox" }}
              columns={columns}
              size="large"
              tableLayout="fixed"
              dataSource={props.users?.data}
              className="mx-3"
              pagination={{
                position: ["bottomLeft"],
                current: props.page,
                hideOnSinglePage: true,
                pageSize: props.users?.meta?.total,
                onChange: (page) => {
                  props.setPage(page);
                },
              }}
              rowKey="id"
            />
          </>
        );
      }}
    </PaginationContainer>
  );
};

export default CustomTable;
