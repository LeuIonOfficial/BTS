import PaginationContainer from "./components/PaginationContainer";
import { Table } from "antd";
import { IClient, IUser } from "@models/clientType.ts";
import useTableColumns from "./constants.tsx";

export interface ISalesData {
  client: IClient;
  comment: string;
  commission: {
    adult: string;
    child: string;
    infants: string;
  };
  created_at: string;
  id: number;
  is_rejected: number;
  is_sold: number;
  is_tips: number;
  is_tp: number;
  offer_id: number;
  pcc: number | null;
  pnr: number | null;
  ticket_protection: number | null;
  tips: number | null;
  user: IUser;
  user_id: number;
}

const CustomTable = () => {
  const columns = useTableColumns();
  return (
    <PaginationContainer>
      {(props) => {
        return (
          <Table
            sticky={true}
            size="small"
            tableLayout="fixed"
            dataSource={props.sales?.data || []}
            columns={columns}
            pagination={{
              current: props.page,
              hideOnSinglePage: true,
              pageSize: props.sales?.meta.per_page,
              total: props.sales?.meta.total,
              onChange: (page) => {
                props.setPage(page);
              },
            }}
            rowKey="id"
            style={{ margin: "0 10px" }}
          />
        );
      }}
    </PaginationContainer>
  );
};

export default CustomTable;
