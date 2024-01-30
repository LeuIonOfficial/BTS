import SalesHeader from './components/Header';
import SalesSubHeader from './components/SubHeader';
import CustomTable from './components/Table';

const SalesPage = () => {
  return (
    <div className="w-full h-full">
      <SalesHeader />
      <SalesSubHeader />
      <CustomTable />
    </div>
  );
};

export default SalesPage;
