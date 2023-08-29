import { DatePicker, Input, Select } from "antd";
import useGetUsers from "@hooks/useGetUsers.ts";

const { RangePicker } = DatePicker;

export const useTypeOfModalFilter = (): Record<string, Record<any, any>> => {
  const { users } = useGetUsers();
  return {
    "0": {
      title: "Filter by date",
      description: () => {
        return <RangePicker />;
      },
    },
    "1": {
      title: "Filter by agent name",
      description: () => {
        return (
          <Select
            style={{ width: "200px" }}
            options={users.data.map(({ name }: { name: string }) => {
              return { label: name, value: name };
            })}
          ></Select>
        );
      },
    },
    "3": {
      title: "Filter by user name",
      description: () => {
        return <Input />;
      },
    },
    "4": {
      title: "Filter by user phone",
      description: () => {
        return <Input />;
      },
    },
    "5": {
      title: "Filter by user email",
      description: () => {
        return <Input />;
      },
    },
    "6": {
      title: "Filter by departure",
      description: () => {
        return <Input />;
      },
    },
    "7": {
      title: "Filter by arrival",
      description: () => {
        return <Input />;
      },
    },
  };
};
