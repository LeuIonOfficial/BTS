import { TableHeader, TextButton } from "@components/index.ts";
import { Dropdown, Typography } from "antd";
import {
  DeleteOutlined,
  FilterOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { IFlightsData } from "@models/clientType.ts";
import { useFiltersItems } from "./constants.tsx";
import { Dispatch, SetStateAction, useState } from "react";
import FilterModal from "./FilterModal";

const CustomTableHeader = ({
  selectedRowElements,
  setDrawerState,
}: {
  selectedRowElements: IFlightsData[] | undefined;
  setDrawerState: Dispatch<SetStateAction<boolean>>;
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
        <TextButton type="text" onClick={() => setDrawerState(true)}>
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

export default CustomTableHeader;
