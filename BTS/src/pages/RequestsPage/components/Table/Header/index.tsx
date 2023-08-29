import { TableHeader, TextButton } from "@components/index.ts";
import { Typography } from "antd";
import { DeleteOutlined, ProjectOutlined } from "@ant-design/icons";
import { IFlightsData } from "@models/clientType.ts";

export const CustomTableHeader = ({
  selectedRowElements,
}: {
  selectedRowElements: IFlightsData[] | undefined;
}) => {
  return (
    <TableHeader>
      <Typography>
        <span style={{ fontSize: "24px", fontWeight: "700" }}>Requests</span>
      </Typography>
      <div>
        <TextButton type="text">
          <ProjectOutlined />
          Create request
        </TextButton>
        <TextButton type="text" disabled={!selectedRowElements?.length}>
          <DeleteOutlined />
          Delete
        </TextButton>
      </div>
    </TableHeader>
  );
};
