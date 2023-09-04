import { Dispatch, SetStateAction } from "react";
import { Button, Drawer, Form, Space } from "antd";
import ClientInformation from "./components/ClientInformation";
import FlightInformation from "./components/FlightInformation";
import { SubmitButton } from "@components/index.ts";
import { useForm } from "antd/es/form/Form";
// import { usePostFlight } from "@hooks/index.ts";
import { IPostFlightsType } from "@models/postFlightsType.ts";
// import { UserContext } from "@store/index.ts";

const CreateRequest = ({
  open,
  setDrawerState,
}: {
  open: boolean;
  setDrawerState: Dispatch<SetStateAction<boolean>>;
}) => {
  const [form] = useForm();
  // const { createFlightRequest } = usePostFlight();
  // const user = useContext(UserContext);

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
          notes: undefined,
          emails: [undefined],
          phones: [undefined],
          marketing_source: undefined,
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
        onFinish={(values: IPostFlightsType) => {
          console.log(values);
          // createFlightRequest({ id: user?.id.toString(), form: values });
        }}
      >
        <ClientInformation />
        <FlightInformation />
      </Form>
    </Drawer>
  );
};

export default CreateRequest;
