import { NavLink, useNavigate } from "react-router-dom";
import { MenuProps } from "antd";

import routes from "@routes/routes.ts";
import { Api } from "@api/index.ts";
import { LogoutOutlined } from "@ant-design/icons";

export const useHeaderItems = () => {
  const nonActiveLink = "text-[16px] text-greenMain ml-4";
  const activeLink =
    "text-[16px] text-greenMain ml-4 border-b border-greenMain pb-1";

  return [
    {
      name: "requests",
      content: (
        <NavLink
          to={routes.authenticated.requests}
          ml-4
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
          onClick={() => {
            Api.auth.logout();
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
