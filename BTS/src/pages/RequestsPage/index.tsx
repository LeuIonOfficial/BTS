import styled from "styled-components";
import CustomTable from "./components/Table";
import { CustomTableHeader } from "./components/Table/Header";
import { useState } from "react";
import { IFlightsData } from "@models/clientType.ts";

import SubHeader from "./components/Table/SubHeader";

const Container = styled.div`
  min-height: 100vh;
  margin: 1rem;
  max-width: 1200px;
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
  return (
    <Container>
      <Content>
        <CustomTableHeader selectedRowElements={selectedRowElements} />
        <SubHeader />
        <CustomTable setSelectedRowElements={setSelectedRowElements} />
      </Content>
    </Container>
  );
};

export default RequestsPage;
