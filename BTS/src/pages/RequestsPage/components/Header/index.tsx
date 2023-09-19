import { TableHeader } from "@components/index.ts";
import { Typography } from "antd";
import SalesFilter from "../RequestsFilter";

const CustomTableHeader = () => {
  return (
    <TableHeader>
      <Typography>
        <span className="text-2xl font-bold">Requests</span>
      </Typography>
      <div>
        <SalesFilter />
      </div>
    </TableHeader>
  );
};

export default CustomTableHeader;
