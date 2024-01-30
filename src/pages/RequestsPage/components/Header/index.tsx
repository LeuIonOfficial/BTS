import { Typography } from 'antd';
import SalesFilter from '../RequestsFilter';

const CustomTableHeader = () => {
  return (
    <div className="table-header">
      <Typography>
        <span className="text-2xl font-bold">Requests</span>
      </Typography>
      <SalesFilter />
    </div>
  );
};

export default CustomTableHeader;
