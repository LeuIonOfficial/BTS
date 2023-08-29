import { Table, Typography } from "antd";
import { useTableColumns } from "./constants.tsx";
import PaginationContainer from "./PaginationContainer";
import { TableHeader, TextButton } from "@components/index.ts";
import { DeleteOutlined, ProjectOutlined } from "@ant-design/icons";

const CustomTable = () => {
  const columns = useTableColumns();

  return (
    <PaginationContainer>
      {(props) => {
        return (
          <>
            <TableHeader>
              <Typography>
                <span style={{ fontSize: "24px", fontWeight: "700" }}>
                  Requests
                </span>
              </Typography>
              <div>
                <TextButton type="text">
                  <ProjectOutlined />
                  Create request
                </TextButton>
                <TextButton type="text">
                  <DeleteOutlined />
                  Delete
                </TextButton>
              </div>
            </TableHeader>
            <Table
              sticky={true}
              size="small"
              tableLayout="fixed"
              columns={columns}
              showHeader={true}
              dataSource={props.flights?.data || []}
              rowSelection={{ type: "checkbox" }}
              pagination={{
                current: props.page,
                hideOnSinglePage: true,
                pageSize: props.flights?.meta?.per_page,
                total: props.flights?.meta?.total,
                onChange: (page) => {
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
