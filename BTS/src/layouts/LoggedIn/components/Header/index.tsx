import { Header } from "antd/es/layout/layout";
import { Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useContext } from "react";

import { useDropdownItems, useHeaderItems } from "./constants.tsx";
import { UserContext } from "@store/index.ts";

const CustomHeader = () => {
  const items = useHeaderItems();
  const dropdownItems = useDropdownItems();
  const user = useContext(UserContext);

  return (
    <Header className="bg-white h-[56px]">
      <div className="flex items-center justify-between flex-row h-[56px]]">
        <div>
          {items.map((item, index) => {
            return <span key={index}>{item.content()}</span>;
          })}
        </div>
        <div>
          <Dropdown menu={{ items: dropdownItems }} trigger={["click"]}>
            <div
              className="flex flex-row items-center  cursor-pointer text-[16px]"
              onClick={(e) => e.preventDefault()}
            >
              <div>{user?.name}</div>
              <UserOutlined className="text-greenMain text-[24px] ml-[10px]" />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default CustomHeader;
