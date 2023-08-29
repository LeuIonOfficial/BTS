import { CustomInput } from "../../../../components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const useFormItems = () => {
  return [
    {
      name: "email",
      content: (
        <CustomInput
          label="Email"
          type="email"
          prefix={<UserOutlined />}
          value=""
        />
      ),
      rules: [
        {
          required: true,
          message: "Please, input your email",
        },
      ],
    },
    {
      name: "password",
      content: (
        <CustomInput
          label="Password"
          type="password"
          prefix={<LockOutlined />}
        />
      ),
      rules: [
        {
          required: true,
          message: "Please, input your password",
        },
      ],
    },
  ];
};

export default useFormItems;
