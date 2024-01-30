import { Typography } from 'antd';
import SalesFilter from '../SalesFilter';

const SalesHeader = () => {
  return (
    <div className="table-header">
      <Typography>
        <span className="text-2xl font-bold">Sales</span>
      </Typography>
      <SalesFilter />
    </div>
  );
};

export default SalesHeader;
