import { NavLink, useNavigate } from "react-router-dom";
import { MenuProps } from "antd";

import routes from "@routes/routes.ts";
import { Api } from "@api/index.ts";
import { LogoutOutlined } from "@ant-design/icons";

export const useHeaderItems = () => {
  const nonActiveLink: string =
    "text-[16px] text-greenMain ml-2 p-2 hover:rounded-md hover:text-white hover:bg-greenMain";
  const activeLink: string =
    "text-[16px] text-white ml-2 p-2 rounded-md bg-greenMain hover:text-white";

  return [
    {
      name: "requests",
      content: (
        <NavLink
          to={routes.authenticated.requests}
          className={({ isActive }) => {
            return isActive ? activeLink : nonActiveLink;
          }}
        >
          Requests
        </NavLink>
      ),
    },
    {
      name: "sales",
      content: (
        <NavLink
          to={routes.authenticated.sales}
          className={({ isActive }) => {
            return isActive ? activeLink : nonActiveLink;
          }}
        >
          Sales
        </NavLink>
      ),
    },
    {
      name: "agents",
      content: (
        <NavLink
          to={routes.authenticated.agents}
          className={({ isActive }) => {
            return isActive ? activeLink : nonActiveLink;
          }}
        >
          Agents
        </NavLink>
      ),
    },
    {
      name: "regions",
      content: (
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? activeLink : nonActiveLink;
          }}
        >
          Regions
        </NavLink>
      ),
    },
    {
      name: "airports",
      content: (
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? activeLink : nonActiveLink;
          }}
        >
          Airports
        </NavLink>
      ),
    },
    {
      name: "export_clients",
      content: (
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? activeLink : nonActiveLink;
          }}
        >
          Export Clients
        </NavLink>
      ),
    },
  ];
};

export const useDropdownItems = (): MenuProps["items"] => {
  const navigate = useNavigate();
  return [
    {
      label: (
        <span
          onClick={async () => {
            await Api.auth.logout();
            navigate("/login");
          }}
          className="flex items-center justify-evenly"
        >
          <LogoutOutlined className="text-greenMain text-[16px]" />
          <span className="text-[16px] ml-[10px]">Logout</span>
        </span>
      ),
      key: "0",
    },
  ];
};
