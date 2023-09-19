import { Switch } from "antd";
import { IUser } from "@models/clientType.ts";
import { EditOutlined } from "@ant-design/icons";

export const useColumns = () => {
  return [
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Role",
      dataIndex: "role",
    },
    {
      key: "3",
      title: "E-mail",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "5",
      title: "Edit",
      render: () => {
        return <EditOutlined className="text-greenMain text-xl" />;
      },
      width: "10%",
    },
    {
      key: "6",
      title: "Is Active",
      render: (_: unknown, record: IUser) => {
        console.log(record);
        return (
          <Switch checked={!record.is_deactivated} className="text-greenMain" />
        );
      },
      width: "10%",
    },
  ];
};
