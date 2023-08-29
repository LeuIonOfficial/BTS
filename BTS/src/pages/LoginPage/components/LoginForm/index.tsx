import { FC } from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

import useFormItems from "./constants.tsx";
import { Api } from "../../../../api";
import routes from "../../../../routes/routes.ts";
import { SubmitButton } from "../../../../components";

const LoginForm: FC = () => {
  const items = useFormItems();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmitForm = (values: { email: string; password: string }) => {
    Api.auth.login(values).then((res) => {
      if (res.success) {
        navigate(routes.authenticated.dashboard);
      } else {
        console.log("error");
      }
    });
  };

  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={handleSubmitForm}
    >
      {items.map((item) => {
        return (
          <Form.Item name={item.name} rules={item.rules}>
            {item.content}
          </Form.Item>
        );
      })}
      <Form.Item>
        <SubmitButton type="primary" htmlType="submit">
          Submit
        </SubmitButton>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
