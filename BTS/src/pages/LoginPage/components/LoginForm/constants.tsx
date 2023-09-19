import { CustomInput } from "../../../../components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const useFormItems = () => {
  return [
    {
      name: "email",
      content: (
        <CustomInput
          // className="h-9 text-[18px]"
          label="E-mail"
          type="email"
          prefix={<UserOutlined />}
          placeholder="example@gmail.com"
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
          // className="h-9 text-[18px]"
          label="Password"
          type="password"
          prefix={<LockOutlined />}
          placeholder="*********"
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
