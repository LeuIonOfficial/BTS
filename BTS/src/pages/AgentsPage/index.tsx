import { Table, Header } from "./components";
import { CustomFloatButton } from "@components/CustomFloatButton";
import { UserAddOutlined } from "@ant-design/icons";

const AgentsPage = () => {
  return (
    <div className="w-full h-full bg-white">
      <Header />
      <Table />
      <CustomFloatButton
        type="primary"
        shape="circle"
        className="w-[50px] h-[50px]"
        onClick={() => {}}
        icon={
          <div className="flex items-center justify-center ">
            <UserAddOutlined className="text-[20px] m-0 p-0" />
          </div>
        }
      />
    </div>
  );
};

export default AgentsPage;
