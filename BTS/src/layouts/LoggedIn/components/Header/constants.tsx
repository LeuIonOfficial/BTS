import { useNavigate } from "react-router-dom";
import { MenuProps } from "antd";

import routes from "@routes/routes.ts";
import { TextButton } from "@components/index.ts";
import { Api } from "../../../../api";

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
              navigate(routes.authenticated.requests);
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
              navigate(routes.authenticated.requests);
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
          Logout
        </a>
      ),
      key: "0",
    },
  ];
};
