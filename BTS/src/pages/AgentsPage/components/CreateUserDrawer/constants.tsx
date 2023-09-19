import { Input, Select } from "antd";
import {
  CheckOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const useUserInputFields = () => {
  return [
    {
      name: "name",
      render() {
        return (
          <Input
            placeholder="Name"
            style={{ width: "300px" }}
            prefix={<UserOutlined />}
          />
        );
      },
    },
    {
      name: "email",
      render() {
        return (
          <Input
            placeholder="E-mail"
            style={{ width: "300px" }}
            prefix={<MailOutlined />}
          />
        );
      },
    },
    {
      name: "phone",
      render() {
        return (
          <Input
            placeholder="Phone"
            style={{ width: "300px" }}
            prefix={<PhoneOutlined />}
          />
        );
      },
    },
    {
      name: "password",
      render() {
        return (
          <Input.Password
            placeholder="Password"
            style={{ width: "300px" }}
            prefix={<LockOutlined />}
          />
        );
      },
    },
    {
      name: "confirm_password",
      render() {
        return (
          <Input.Password
            placeholder="Confirm password"
            style={{ width: "300px" }}
            prefix={<CheckOutlined />}
          />
        );
      },
    },
    {
      name: "role",
      render() {
        return (
          <Select
            placeholder="Role"
            style={{ width: "300px" }}
            // prefix={<KeyOutlined />}
            options={[
              { name: "admin", value: "Admin" },
              { name: "supervisor", value: "Supervisor" },
              { name: "agent", value: "Agent" },
            ]}
          />
        );
      },
    },
  ];
};
