import { Switch } from "antd";
import { IUser } from "@models/clientType.ts";
import { EditOutlined } from "@ant-design/icons";

import { Dispatch, SetStateAction } from "react";

export const useColumns = (
  setDrawerState: Dispatch<SetStateAction<"create" | "update" | "closed">>,
  setUserToUpdate: Dispatch<SetStateAction<IUser | undefined>>,
) => {
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
      render: (_: unknown, record: IUser) => {
        return (
          <EditOutlined
            className="text-greenMain text-xl"
            onClick={() => {
              setDrawerState("update");
              setUserToUpdate(record);
            }}
          />
        );
      },
      width: "10%",
    },
    {
      key: "6",
      title: "Is Active",
      render: (_: unknown, record: IUser) => {
        return (
          <Switch checked={!record.is_deactivated} className="text-greenMain" />
        );
      },
      width: "10%",
    },
  ];
};
