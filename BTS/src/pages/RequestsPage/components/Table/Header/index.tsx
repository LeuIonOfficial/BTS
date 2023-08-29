import { TableHeader, TextButton } from "@components/index.ts";
import { Dropdown, Typography } from "antd";
import {
  DeleteOutlined,
  FilterOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { IFlightsData } from "@models/clientType.ts";
import { useFiltersItems } from "./constants.tsx";
import { useState } from "react";
import FilterModal from "./FilterModal";

export const CustomTableHeader = ({
  selectedRowElements,
}: {
  selectedRowElements: IFlightsData[] | undefined;
}) => {
  const [modalState, setModalState] = useState<string | undefined>();
  const filters = useFiltersItems(setModalState);
  return (
    <TableHeader>
      <Typography>
        <span style={{ fontSize: "24px", fontWeight: "700" }}>Requests</span>
      </Typography>
      <div>
        <Dropdown menu={{ items: filters }} trigger={["click"]}>
          <TextButton type="text">
            <FilterOutlined />
            <span>Filter</span>
          </TextButton>
        </Dropdown>
        <FilterModal modalState={modalState} setModalState={setModalState} />
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
