import React, { Dispatch, SetStateAction } from "react";
import { Button, Drawer, Form, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";

import { SubmitButton } from "@components/index.ts";
import { useUserInputFields } from "./constants.tsx";

interface Props {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const CreateUserDrawer: React.FC<Props> = (props) => {
  const [form] = useForm();
  const fields = useUserInputFields();
  return (
    <Drawer
      title="Create new user"
      width="700px"
      open={props.isModal}
      onClose={() => props.setIsModal(false)}
      extra={
        <Space>
          <Button
            onClick={() => {
              props.setIsModal(false);
            }}
          >
            Cancel
          </Button>
          <SubmitButton
            type="primary"
            htmlType="submit"
            onClick={() => {
              form.submit();
            }}
          >
            Submit
          </SubmitButton>
        </Space>
      }
    >
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl m-10">Register new user</h1>
        <Form
          layout="horizontal"
          form={form}
          onFinish={(values) => console.log(values)}
        >
          {fields.map((el, index) => {
            return (
              <FormItem name={el.name} key={index}>
                {el.render()}
              </FormItem>
            );
          })}
        </Form>
        <h1 className="text-[#e6e6e6] text-[180px] font-[800] tracking-[-10px] mb-0">
          BTS
        </h1>
      </div>
    </Drawer>
  );
};

export default CreateUserDrawer;
