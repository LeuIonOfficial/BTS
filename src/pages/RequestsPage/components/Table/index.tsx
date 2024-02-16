import { GetFlightsType } from '@models/flights.ts';
import { Table } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import PaginationContainer from './components/PaginationContainer/index.tsx';
import { useTableColumns } from './constants.tsx';
import { generatePath, useNavigate } from 'react-router-dom';
import routes from '@routes/routes.ts';

const CustomTable = ({
  setSelectedRowElements,
}: {
  setSelectedRowElements: Dispatch<SetStateAction<GetFlightsType[] | undefined>>;
}) => {
  const columns = useTableColumns();
  const navigate = useNavigate();

  return (
    <PaginationContainer>
      {(props) => {
        const data = props.flights?.data;
        return (
          <div className="overflow-hidden rounded-md bg-white shadow">
            <Table
              sticky={true}
              size="small"
              tableLayout="fixed"
              columns={columns}
              showHeader={true}
              dataSource={data as GetFlightsType[] | undefined}
              rowSelection={{
                type: 'checkbox',
                onChange: (_, record: GetFlightsType[]) => {
                  setSelectedRowElements(record);
                },
              }}
              pagination={{
                position: ['bottomLeft'],
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
              rowClassName={'cursor-pointer'}
              onRow={(record) => {
                return {
                  onClick: () =>
                    navigate(
                      generatePath(routes.authenticated.assignedFlights, {
                        id: record.id,
                        page: 'flight-details',
                      }),
                    ),
                };
              }}
            />
          </div>
        );
      }}
    </PaginationContainer>
  );
};

export default CustomTable;
