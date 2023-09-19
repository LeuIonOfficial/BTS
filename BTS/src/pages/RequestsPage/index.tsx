import { useState } from "react";

import { Header, RequestDrawer, SubHeader, Table } from "./components/";
import { IFlightsData } from "@models/clientType.ts";
import { StyledPage } from "@components/index.ts";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { CustomFloatButton } from "@components/CustomFloatButton";

const RequestsPage = () => {
  const [selectedRowElements, setSelectedRowElements] =
    useState<IFlightsData[]>();
  const [drawerState, setDrawerState] = useState<boolean>(false);
  return (
    <StyledPage>
      <Header />
      <SubHeader />
      <RequestDrawer open={drawerState} setDrawerState={setDrawerState} />
      <Table setSelectedRowElements={setSelectedRowElements} />
      <CustomFloatButton
        type="primary"
        shape="circle"
        style={{
          width: "50px",
          height: "50px",
        }}
        onClick={() => {
          setDrawerState(true);
        }}
        icon={
          <div className="flex items-center justify-center ">
            <PlusOutlined style={{ fontSize: "20px", margin: 0, padding: 0 }} />
          </div>
        }
      />
      {!!selectedRowElements?.length && (
        <CustomFloatButton
          style={{ bottom: 110, width: "50px", height: "50px" }}
          type="primary"
          shape="circle"
          icon={
            <div className="flex items-center justify-center ">
              <DeleteOutlined
                style={{ fontSize: "20px", margin: 0, padding: 0 }}
              />
            </div>
          }
        />
      )}
    </StyledPage>
  );
};

export default RequestsPage;
