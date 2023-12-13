import { ISalesData } from "./index.tsx";
import { formatDate } from "@helpers/FormatDate/formatDate.ts";

const useTableColumns = () => {
  return [
    {
      key: "1",
      title: "Created at",
      render: (_: unknown, record: ISalesData) => {
        return <span>{formatDate(record.created_at)}</span>;
      },
      width: "8%",
    },
    {
      key: "2",
      title: "Lead ID",
      render: (_: unknown, record: ISalesData) => {
        return <span>{record.id}</span>;
      },
      width: "4%",
    },
    {
      key: "3",
      title: "Sale ID",
      render: (_: unknown, record: ISalesData) => {
        return <span>{record.offer_id}</span>;
      },
      width: "4%",
    },
    {
      key: "4",
      title: "Sale Type",
      width: "4%",
    },
    {
      key: "5",
      title: "Agent",
      render: (_: unknown, record: ISalesData) => {
        return <span>{record.user.name}</span>;
      },
    },
    {
      key: "6",
      title: "Client",
      render: (_: unknown, record: ISalesData) => {
        return (
          <span>{`${record.client.first_name} ${record.client.last_name}`}</span>
        );
      },
      width: "7%",
    },
    {
      key: "7",
      title: "Flight",
    },
    {
      key: "8",
      title: "Net Price",
    },
    {
      key: "9",
      title: "Selling Price",
    },
    {
      key: "10",
      title: "CP",
    },
    {
      key: "11",
      title: "TP",
    },
    {
      key: "12",
      title: "Tips",
    },
    {
      key: "13",
      title: "Source",
    },
    {
      key: "14",
      title: "Type",
    },
    {
      key: "15",
      title: "Campaign",
    },
  ];
};

export default useTableColumns;
