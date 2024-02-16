import { IClient, IUser } from '@models/clientType.ts';
import { Table, TablePaginationConfig } from 'antd';
import PaginationContainer from './components/PaginationContainer/index.tsx';
import useTableColumns from './constants.tsx';

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
    <div className="overflow-hidden rounded-md bg-white shadow">
      <PaginationContainer>
        {(props) => {
          return (
            <Table
              scroll={{ x: 1300 }}
              sticky={true}
              rowSelection={{ type: 'checkbox' }}
              size="large "
              tableLayout="fixed"
              dataSource={props.sales?.data || []}
              columns={columns}
              pagination={
                {
                  current: props.page,
                  hideOnSinglePage: true,
                  pageSize: props.sales?.meta.per_page,
                  total: props.sales?.meta.total,
                  onChange: (page: number) => props.setPage(page),
                } as TablePaginationConfig
              }
              rowKey="id"
            />
          );
        }}
      </PaginationContainer>
    </div>
  );
};

export default CustomTable;
