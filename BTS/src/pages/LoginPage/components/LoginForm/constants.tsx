import CustomInput from "@components/CustomInput";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const useFormItems = () => {
  return [
    {
      name: "email",
      content: (
        <CustomInput
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
