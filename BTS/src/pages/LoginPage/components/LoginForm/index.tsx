import { FC, useState } from "react";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";

import useFormItems from "./constants.tsx";
import { Api } from "../../../../api";
import routes from "../../../../routes/routes.ts";
import { SubmitButton } from "../../../../components";

const LoginForm: FC = () => {
  const items = useFormItems();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  const handleSubmitForm = (values: { email: string; password: string }) => {
    setButtonStatus(true);
    const login = async () => {
      const response = await Api.auth.login(values);
      if (response.success) {
        navigate(routes.authenticated.dashboard);
      } else {
        messageApi.open({ type: "error", content: response.message });
        setButtonStatus(false);
      }
    };
    login();
  };

  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={handleSubmitForm}
    >
      {contextHolder}
      {items.map((item, index) => {
        return (
          <Form.Item name={item.name} rules={item.rules} key={index}>
            {item.content}
          </Form.Item>
        );
      })}
      <Form.Item>
        <SubmitButton type="primary" htmlType="submit" disabled={buttonStatus}>
          Submit
        </SubmitButton>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
