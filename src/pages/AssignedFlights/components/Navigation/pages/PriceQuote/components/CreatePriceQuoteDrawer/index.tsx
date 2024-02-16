import { Button, Drawer, Space } from 'antd';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

interface IProps {
  children?: ReactNode;
  drawerState: boolean;
  setDrawerState: Dispatch<SetStateAction<boolean>>;
  data?: any;
}

const CreatePriceQuoteDrawer: FC<IProps> = ({ drawerState, setDrawerState, data }) => {
  return (
    <Drawer
      forceRender
      open={drawerState}
      onClose={() => {
        setDrawerState(false);
      }}
      width="1000px"
      maskClosable
      closable
      title="Create new Price Quote"
      extra={
        <Space>
          <Button
            onClick={() => {
              setDrawerState(false);
            }}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" className="submit-button" onClick={() => {}}>
            Submit
          </Button>
        </Space>
      }
    ></Drawer>
  );
};

export default CreatePriceQuoteDrawer;
