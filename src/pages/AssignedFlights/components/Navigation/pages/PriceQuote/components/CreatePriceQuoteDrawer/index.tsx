import { Button, Drawer, FormInstance, Space } from 'antd';
import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from 'react';
import PQForm from './components/Form.tsx';
import { DrawerState } from '../../index.tsx';
import { useQueryClient } from '@tanstack/react-query';
import { GetFlightsType, IFlightDetails } from '@models/flights.ts';

interface IProps {
  children?: ReactNode;
  drawerState: DrawerState;
  setDrawerState: Dispatch<SetStateAction<DrawerState>>;
  data?: any;
  form?: FormInstance;
}

const CreatePriceQuoteDrawer: FC<IProps> = ({ drawerState, setDrawerState, form }) => {
  const flightDetails = useQueryClient().getQueryData(['flightDetails']) as {
    data: { data: GetFlightsType };
  };

  const handleCloseDrawer = () => {
    setDrawerState('closed');
    form?.resetFields();
  };

  useEffect(() => {
    if (drawerState === 'create') {
      form?.setFieldsValue({
        adults: flightDetails?.data?.data.details[0].adults,
        child: flightDetails?.data?.data.details[0].child,
        infants: flightDetails?.data?.data.details[0].infants,
      });
    }
  }, [drawerState]);

  const drawerProps = {
    forceRender: true,
    open: !!(drawerState === 'create' || 'update'),
    onClose: handleCloseDrawer,
    width: '1000px',
    maskClosable: true,
    closable: true,
    title: drawerState === 'create' ? 'Create Price Quote' : 'Clone Price Quote',
    extra: (
      <Space>
        <Button onClick={handleCloseDrawer}>Cancel</Button>
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
