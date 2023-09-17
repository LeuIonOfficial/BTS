import { TableHeader } from "@components/index.ts";
import { Typography } from "antd";

const CustomTableHeader = () => {
  return (
    <TableHeader>
      <Typography>
        <span className="text-lg font-bold">Requests</span>
      </Typography>
      <div></div>
    </TableHeader>
  );
};

export default CustomTableHeader;
