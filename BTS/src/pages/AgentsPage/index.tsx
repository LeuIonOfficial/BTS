import { UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Table, Header, CreateUserDrawer } from "./components";
import { CustomFloatButton } from "@components/CustomFloatButton";

const AgentsPage = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <div className="w-full h-full bg-white">
      <Header />
      <Table />
      <CustomFloatButton
        type="primary"
        shape="circle"
        className="w-[50px] h-[50px]"
        onClick={() => {
          setIsModal(true);
        }}
        icon={
          <div className="flex items-center justify-center ">
            <UserAddOutlined className="text-[20px] m-0 p-0" />
          </div>
        }
      />
      {isModal && (
        <CreateUserDrawer isModal={isModal} setIsModal={setIsModal} />
      )}
    </div>
  );
};

export default AgentsPage;
