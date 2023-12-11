import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Button, Drawer, Form, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";

import { SubmitButton } from "@components/index.ts";
import { useUserInputFields } from "./constants.tsx";
import usePostUser from "@hooks/usePostUser.ts";
import { PostUserType } from "@models/user.ts";
import { IUser } from "@models/clientType.ts";
import { useUpdateUser } from "@hooks/useUpdateUser.ts";

interface Props {
  drawerState: string;
  setDrawerState: Dispatch<SetStateAction<"create" | "update" | "closed">>;
  userToUpdate: IUser | undefined;
}

const CreateUserDrawer: React.FC<Props> = ({
  drawerState,
  setDrawerState,
  userToUpdate,
}) => {
  const [form] = useForm();
  const fields = useUserInputFields();
  const { postUser } = usePostUser(setDrawerState);
  const { updateUser } = useUpdateUser(setDrawerState);

  const handleFinish = (values: PostUserType) => {
    drawerState === "create" && postUser(values);
    drawerState === "update" &&
      userToUpdate &&
      updateUser({ ...values, id: userToUpdate.id });
  };

  useEffect(() => {
    form.setFieldsValue(userToUpdate || {});
  }, [userToUpdate, form]);

  return (
    <Drawer
      title={drawerState === "create" ? "Create new user" : "Update old user"}
      width="700px"
      open={drawerState === "create" || drawerState === "update"}
      onClose={() => {
        setDrawerState("closed");
        form.resetFields();
      }}
      extra={
        <Space>
          <Button
            onClick={() => {
              setDrawerState("closed");
              form.resetFields();
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
        <h1 className="font-bold text-2xl m-10">
          {drawerState === "create" ? "Create new user" : "Update old user"}
        </h1>
        <Form
          layout="horizontal"
          form={form}
          onFinish={handleFinish}
          name="user"
        >
          {fields.map(({ name, rules, render }, index) => {
            return (
              <FormItem name={name} key={index} validateFirst rules={rules}>
                {render}
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
