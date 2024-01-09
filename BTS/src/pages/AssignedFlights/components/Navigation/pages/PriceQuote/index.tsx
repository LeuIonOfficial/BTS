import { useParams } from "react-router-dom";

import Loader from "@components/Loader";
import useGetOffers from "@hooks/useGetOffers.ts";
import { Table } from "antd";
import { useTableColumns } from "./constants.tsx";

const PriceQuote = () => {
  const id = useParams().id as string;
  const { offers, isLoading } = useGetOffers(id);
  const columns = useTableColumns();

  if (isLoading) {
    return (
      <div className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
        <Loader />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <Table columns={columns} dataSource={offers} scroll={{ x: 1300 }} />
    </div>
  );
};

export default PriceQuote;
