import { FC, useState } from "react";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";

import useFormItems from "./constants.tsx";
import { Api } from "@api/index.ts";
import routes from "@routes/routes.ts";
import { SubmitButton } from "@components/index.ts";
import background from "@assets/183355.jpg";
import { RightOutlined } from "@ant-design/icons";

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
        navigate(routes.authenticated.requests);
      } else {
        messageApi.open({ type: "error", content: response.message });
        setButtonStatus(false);
      }
    };
    login();
  };

  return (
    <div className="overflow-hidden flex items-center h-[100vh]">
      <img
        src={background}
        alt="plane"
        className="w-full h-full absolute -z-10"
      />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              The quick, brown fox <br className="hidden md:block" />
              jumps over a <span className="text-teal-accent-400">BTS</span>
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors
              duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              Learn more
              <RightOutlined />
            </a>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative bg-white rounded-[8px] shadow-2xl sm:px-10 pt-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up
                </h3>
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
                      <Form.Item
                        name={item.name}
                        rules={item.rules}
                        key={index}
                        className="my-6"
                      >
                        {item.content}
                      </Form.Item>
                    );
                  })}
                  <Form.Item>
                    <SubmitButton
                      type="primary"
                      htmlType="submit"
                      disabled={buttonStatus}
                      className="mb-10 mt-2 text-[14px]"
                    >
                      Submit
                    </SubmitButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
