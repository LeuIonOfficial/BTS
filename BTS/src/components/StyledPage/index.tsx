import styled from "styled-components";
import { ReactNode } from "react";

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

interface Props {
  children: ReactNode;
}

const StyledPage = ({ children }: Props) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default StyledPage;
