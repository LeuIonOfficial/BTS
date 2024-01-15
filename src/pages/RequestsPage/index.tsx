import { useState } from "react";

import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { GetFlightsType } from "@models/flights.ts";
import { FloatButton } from "antd";
import { Header, RequestDrawer, SubHeader, Table } from "./components";

const RequestsPage = () => {
  const [selectedRowElements, setSelectedRowElements] = useState<
    GetFlightsType[]
  >();
  const [drawerState, setDrawerState] = useState<boolean>(false);
  return (
    <div className="w-full h-full">
      <Header />
      <SubHeader />
      <RequestDrawer open={drawerState} setDrawerState={setDrawerState} />
      <Table setSelectedRowElements={setSelectedRowElements} />
      <FloatButton
        type="primary"
        shape="circle"
        className="float-button"
        onClick={() => {
          setDrawerState(true);
        }}
        icon={
          <div className="flex items-center justify-center ">
            <PlusOutlined className="text-[20px] m-0 p-0" />
          </div>
        }
      />
      {!!selectedRowElements?.length && (
        <FloatButton
          className="bottom-[110px] float-button"
          type="primary"
          shape="circle"
          icon={
            <div className="flex items-center justify-center ">
              <DeleteOutlined className="text-[20px] m-0 p-0" />
            </div>
          }
        />
      )}
    </div>
  );
};

export default RequestsPage;
