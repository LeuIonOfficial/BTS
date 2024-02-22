import { Button, Drawer, FormInstance, Space } from 'antd';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import PQForm from './components/Form.tsx';

interface IProps {
  children?: ReactNode;
  drawerState: boolean;
  setDrawerState: Dispatch<SetStateAction<boolean>>;
  data?: any;
  form?: FormInstance;
}

const CreatePriceQuoteDrawer: FC<IProps> = ({ drawerState, setDrawerState, form, data }) => {
  const drawerProps = {
    forceRender: true,
    open: drawerState,
    onClose: () => {
      setDrawerState(false);
      form?.resetFields();
    },
    width: '1000px',
    maskClosable: true,
    closable: true,
    title: 'Create new Price Quote',
    extra: (
      <Space>
        <Button
          onClick={() => {
            setDrawerState(false);
          }}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          className="submit-button"
          onClick={() => {
            form?.submit();
          }}
        >
          Submit
        </Button>
      </Space>
    ),
  };
  return (
    <Drawer {...drawerProps}>
      <PQForm form={form!} />
    </Drawer>
  );
};

export default CreatePriceQuoteDrawer;
