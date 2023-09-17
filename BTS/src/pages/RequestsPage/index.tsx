import { useState } from "react";

import { Header, RequestDrawer, SubHeader, Table } from "./components/";
import { IFlightsData } from "@models/clientType.ts";
import { StyledPage } from "@components/index.ts";
import { FloatButton } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

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
      <FloatButton
        onClick={() => {
          setDrawerState(true);
        }}
      />
      {!!selectedRowElements?.length && (
        <FloatButton style={{ bottom: 100 }} icon={<DeleteOutlined />} />
      )}
    </StyledPage>
  );
};

export default RequestsPage;
