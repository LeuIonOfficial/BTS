import { useNavigate } from "react-router-dom";
import { MenuProps } from "antd";

import routes from "@routes/routes.ts";
import { TextButton } from "@components/index.ts";
import { Api } from "@api/index.ts";
import { LogoutOutlined } from "@ant-design/icons";

export const useHeaderItems = () => {
  const navigate = useNavigate();
  return [
    {
      name: "requests",
      content: () => {
        return (
          <TextButton
            type="text"
            onClick={() => {
              navigate(routes.authenticated.requests);
            }}
            className="text-[16px]"
          >
            Requests
          </TextButton>
        );
      },
    },
    {
      name: "sales",
      content: () => {
        return (
          <TextButton
            type="text"
            onClick={() => {
              navigate(routes.authenticated.sales);
            }}
            className="text-[16px]"
          >
            Sales
          </TextButton>
        );
      },
    },
    {
      name: "agents",
      content: () => {
        return (
          <TextButton
            type="text"
            onClick={() => {
              navigate(routes.authenticated.agents);
            }}
            className="text-[16px]"
          >
            Agents
          </TextButton>
        );
      },
    },
    {
      name: "regions",
      content: () => {
        return (
          <TextButton
            type="text"
            onClick={() => {
              navigate("/");
            }}
            className="text-[16px]"
          >
            Regions
          </TextButton>
        );
      },
    },
    {
      name: "airports",
      content: () => {
        return (
          <TextButton
            type="text"
            onClick={() => {
              navigate("/");
            }}
            className="text-[16px]"
          >
            Airports
          </TextButton>
        );
      },
    },
    {
      name: "export_clients",
      content: () => {
        return (
          <TextButton
            type="text"
            onClick={() => {
              navigate("/");
            }}
            className="text-[16px]"
          >
            Export Clients
          </TextButton>
        );
      },
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
