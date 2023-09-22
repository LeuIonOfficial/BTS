import { Dispatch, SetStateAction, useContext } from "react";
import { Button, Drawer, Form, Space } from "antd";
import { useForm } from "antd/es/form/Form";

import ClientInformation from "./components/ClientInformation";
import FlightInformation from "./components/FlightInformation";
import { SubmitButton } from "@components/index.ts";
import { usePostFlight } from "@hooks/index.ts";
import { PostFlightType } from "@models/flights.ts";
import { UserContext } from "@store/index.ts";

const CreateRequest = ({
  open,
  setDrawerState,
}: {
  open: boolean;
  setDrawerState: Dispatch<SetStateAction<boolean>>;
}) => {
  const [form] = useForm();
  const { postFlightRequest } = usePostFlight();
  const user = useContext(UserContext);

  return (
    <Drawer
      open={open}
      onClose={() => {
        setDrawerState(false);
        form.resetFields();
      }}
      width="1000px"
      maskClosable
      closable
      title="Create new flight request"
      extra={
        <Space>
          <Button
            onClick={() => {
              setDrawerState(false);
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
      <Form
        layout="horizontal"
        form={form}
        colon={false}
        labelCol={{ span: "6" }}
        labelWrap={true}
        initialValues={{
          first_name: undefined,
          last_name: undefined,
          marketing_source: undefined,
          emails: [undefined],
          phones: [undefined],
          details: [
            {
              adults: undefined,
              child: undefined,
              infants: undefined,
              iata_from: undefined,
              iata_to: undefined,
              departure_date: undefined,
            },
          ],
        }}
        onFinish={(values: PostFlightType) => {
          postFlightRequest({ ...values, user_id: user?.id.toString() });
        }}
      >
        <ClientInformation />
        <FlightInformation />
      </Form>
    </Drawer>
  );
};

export default CreateRequest;
