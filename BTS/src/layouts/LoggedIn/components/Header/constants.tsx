import { useNavigate } from "react-router-dom";
import { MenuProps } from "antd";

import routes from "@routes/routes.ts";
import { TextButton } from "@components/index.ts";
import { Api } from "../../../../api";
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
          >
            Sales
          </TextButton>
        );
      },
    },
    {
      name: "register",
      content: () => {
        return (
          <TextButton
            type="text"
            onClick={() => {
              navigate("/");
            }}
          >
            Register
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
        <a
          onClick={() => {
            Api.auth.logout();
            navigate("/login");
          }}
        >
          <LogoutOutlined color="#059e9b" />
          <span style={{ marginLeft: "10px" }}>Logout</span>
        </a>
      ),
      key: "0",
    },
  ];
};
