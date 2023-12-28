import { UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Table, Header, CreateUserDrawer } from "./components";
import { IUser } from "@models/clientType.ts";
import { FloatButton } from "antd";
import { StyledPage } from "@components/index.ts";

const AgentsPage = () => {
  const [drawerState, setDrawerState] = useState<
    "create" | "update" | "closed"
  >("closed");
  const [userToUpdate, setUserToUpdate] = useState<IUser | undefined>(
    undefined,
  );

  return (
    <StyledPage>
      <Header />
      <Table
        setDrawerState={setDrawerState}
        setUserToUpdate={setUserToUpdate}
      />
      <FloatButton
        type="primary"
        shape="circle"
        className="float-button"
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
    </StyledPage>
  );
};

export default AgentsPage;
