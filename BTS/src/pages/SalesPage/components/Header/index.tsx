import { Typography } from "antd";
import { TableHeader } from "@components/index.ts";
import SalesFilter from "../SalesFilter";

const SalesHeader = () => {
  return (
    <TableHeader>
      <Typography>
        <span className="text-2xl font-bold">Sales</span>
      </Typography>
      <SalesFilter />
    </TableHeader>
  );
};

export default SalesHeader;
