import { DatePicker, Select } from "antd";
import useGetUsers from "@hooks/useGetUsers.ts";
import { marketingSource } from "../../../../helpers/MarketingSource";

export const useFilterFields = () => {
  const { users } = useGetUsers();
  const { RangePicker } = DatePicker;
  return [
    {
      label: "Date",
      name: "date",
      className: "my-0 mx-3",
      render: <RangePicker style={{ width: "300px" }} />,
    },
    {
      label: "Agent",
      name: "agent",
      className: "my-0 mx-3",
      render: (
        <Select
          style={{ width: "200px" }}
          options={users?.data?.map(({ name }: { name: string }) => {
            return { label: name, value: name };
          })}
        />
      ),
    },
    {
      label: "Marketing Source",
      name: "marketing_source",
      className: "my-0 mx-3",
      render: (
        <Select
          style={{ width: "200px" }}
          options={marketingSource.map((el) => ({ name: el, value: el }))}
        />
      ),
    },
  ];
};
