import styled from "styled-components";
import { useState } from "react";

import { Header, RequestDrawer, SubHeader, Table } from "./components/";
import { IFlightsData } from "@models/clientType.ts";

const Container = styled.div`
  height: 100%;
  margin: 1rem;
  width: 100%;
  background-color: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
const RequestsPage = () => {
  const [selectedRowElements, setSelectedRowElements] =
    useState<IFlightsData[]>();
  const [drawerState, setDrawerState] = useState<boolean>(false);
  return (
    <Container>
      <Content>
        <Header
          selectedRowElements={selectedRowElements}
          setDrawerState={setDrawerState}
        />
        <SubHeader />
        <RequestDrawer open={drawerState} setDrawerState={setDrawerState} />
        <Table setSelectedRowElements={setSelectedRowElements} />
      </Content>
    </Container>
  );
};

export default RequestsPage;
