import { ReactNode } from "react";
import { Divider } from "antd";
import styled from "styled-components";

import CustomHeader from "./components/Header";

const StyledDivider = styled(Divider)`
  margin: 0;
`;

const Container = styled.div`
  //align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
  min-height: 92vh;
  background-color: #f5f5f5;
`;

const LoggedIn = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <CustomHeader />
      <StyledDivider />
      <Container>{children}</Container>
    </div>
  );
};

export default LoggedIn;
