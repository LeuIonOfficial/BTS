import styled from "styled-components";
import { ReactNode } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px 0 20px;
`;

const TableHeader = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default TableHeader;
