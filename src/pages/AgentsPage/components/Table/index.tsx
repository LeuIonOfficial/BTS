import { IUser } from '@models/clientType.ts';
import { Table } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import PaginationContainer from './components/PaginationContainer/index.tsx';
import { useColumns } from './constants.tsx';

const CustomTable: React.FC<{
  setDrawerState: Dispatch<SetStateAction<'create' | 'update' | 'closed'>>;
  setUserToUpdate: Dispatch<SetStateAction<IUser | undefined>>;
}> = ({ setDrawerState, setUserToUpdate }) => {
  const columns = useColumns(setDrawerState, setUserToUpdate);

  return (
    <div className="overflow-hidden rounded-md bg-white shadow mt-4">
      <PaginationContainer>
        {(props) => {
          const { users, page, setPage } = { ...props };
          return (
            <>
              <Table
                scroll={{ x: 1300 }}
                rowSelection={{ type: 'checkbox' }}
                columns={columns}
                size="large"
                tableLayout="fixed"
                dataSource={users?.data}
                pagination={{
                  position: ['bottomLeft'],
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
    </div>
  );
};

export default CustomTable;
