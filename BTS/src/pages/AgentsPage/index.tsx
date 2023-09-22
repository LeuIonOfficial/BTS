import { UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Table, Header, CreateUserDrawer } from "./components";
import { CustomFloatButton } from "@components/CustomFloatButton";
import { IUser } from "@models/clientType.ts";

const AgentsPage = () => {
  const [drawerState, setDrawerState] = useState<
    "create" | "update" | "closed"
  >("closed");
  const [userToUpdate, setUserToUpdate] = useState<IUser | undefined>(
    undefined,
  );

  return (
    <div className="w-full h-full bg-white">
      <Header />
      <Table
        setDrawerState={setDrawerState}
        setUserToUpdate={setUserToUpdate}
      />
      <CustomFloatButton
        type="primary"
        shape="circle"
        className="w-[50px] h-[50px]"
        onClick={() => {
          setDrawerState("create");
        }}
        icon={
          <div className="flex items-center justify-center ">
            <UserAddOutlined className="text-[20px] m-0 p-0" />
          </div>
        }
      />

      <CreateUserDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        userToUpdate={userToUpdate}
      />
    </div>
  );
};

export default AgentsPage;
