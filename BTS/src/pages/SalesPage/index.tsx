import { StyledPage } from "@components/index.ts";
import CustomTable from "./components/Table";
import SalesHeader from "./components/Header";
import SalesSubHeader from "./components/SubHeader";

const SalesPage = () => {
  return (
    <StyledPage>
      <SalesHeader />
      <SalesSubHeader />
      <CustomTable />
    </StyledPage>
  );
};

export default SalesPage;
