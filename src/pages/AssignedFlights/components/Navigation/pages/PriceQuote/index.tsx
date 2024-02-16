import { useParams } from 'react-router-dom';

import Loader from '@components/Loader';
import useGetOffers from '@hooks/useGetOffers.ts';
import { FloatButton, Table } from 'antd';
import { useTableColumns } from './constants.tsx';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { CreatePriceQuoteDrawer } from './components';

const PriceQuote = () => {
  const id = useParams().id as string;
  const { offers, isLoading } = useGetOffers(id);
  const columns = useTableColumns();
  const [drawerState, setDrawerState] = useState(false);

  if (isLoading) {
    return (
      <div className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
        <Loader />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <Table columns={columns} dataSource={offers} scroll={{ x: 1300 }} pagination={false} />
      <CreatePriceQuoteDrawer setDrawerState={setDrawerState} drawerState={drawerState} />
      <FloatButton
        type="primary"
        shape="circle"
        className="float-button"
        onClick={() => {
          setDrawerState(true);
        }}
        icon={
          <div className="flex items-center justify-center ">
            <PlusOutlined className="text-[20px] m-0 p-0" />
          </div>
        }
      />
    </div>
  );
};

export default PriceQuote;
