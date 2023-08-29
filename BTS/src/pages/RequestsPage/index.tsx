import styled from "styled-components";
import CustomTable from "./components/Table";

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
  return (
    <Container>
      <Content>
        <CustomTable></CustomTable>
      </Content>
    </Container>
  );
};

export default RequestsPage;
