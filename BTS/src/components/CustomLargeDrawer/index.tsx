import { Dispatch, ReactNode, SetStateAction } from "react";
import { Drawer } from "antd";

const CustomLargeDrawer = ({
  open,
  setDrawerState,
  children,
}: {
  open: boolean;
  setDrawerState: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  return (
    <Drawer
      open={open}
      closable={true}
      onClose={() => setDrawerState(false)}
      style={{ width: "1200px" }}
    >
      {children}
    </Drawer>
  );
};

export default CustomLargeDrawer;
