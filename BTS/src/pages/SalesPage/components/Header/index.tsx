import { Typography } from "antd";
import { TableHeader } from "@components/index.ts";
import SalesFilter from "../SalesFilter";

const SalesHeader = () => {
  return (
    <TableHeader>
      <Typography>
        <span style={{ fontSize: "24px", fontWeight: "700" }}>Sales</span>
      </Typography>
      <SalesFilter />
      {/*<Form colon={false} className="flex flex-row items-center justify-center">*/}
      {/*  <FormItem label="Select entries" name="entries" className="me-3">*/}
      {/*    <Select*/}
      {/*      style={{ width: "150px" }}*/}
      {/*      defaultValue="10"*/}
      {/*      options={[*/}
      {/*        { label: "10", value: "10" },*/}
      {/*        { label: "25", value: "25" },*/}
      {/*        { label: "50", value: "50" },*/}
      {/*        { label: "100", value: "100" },*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*  </FormItem>*/}
      {/*  <FormItem label="Search" name="search">*/}
      {/*    <Input style={{ width: "200px" }} />*/}
      {/*  </FormItem>*/}
      {/*</Form>*/}
    </TableHeader>
  );
};

export default SalesHeader;
