import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import { Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useContext } from "react";

import { useDropdownItems, useHeaderItems } from "./constants.tsx";
import { UserContext } from "@store/index.ts";

const StyledHeader = styled(Header)`
  background-color: #fff;
  height: 56px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 56px;
  }
`;

const UserProfile = styled.div`
  cursor: pointer;
  height: 56px;

  div {
    margin-right: 10px;
  }

  span {
    color: #059e9b;
    font-size: 24px;
  }
`;

const CustomHeader = () => {
  const items = useHeaderItems();
  const dropdownItems = useDropdownItems();
  const user = useContext(UserContext);

  return (
    <StyledHeader>
      <div>
        <div>
          {items.map((item, index) => {
            return <span key={index}>{item.content()}</span>;
          })}
        </div>
        <div>
          <Dropdown menu={{ items: dropdownItems }} trigger={["click"]}>
            <UserProfile onClick={(e) => e.preventDefault()}>
              <div>{user?.name}</div>
              <UserOutlined style={{ color: "#059e9b", fontSize: "24px" }} />
            </UserProfile>
          </Dropdown>
        </div>
      </div>
    </StyledHeader>
  );
};

export default CustomHeader;
