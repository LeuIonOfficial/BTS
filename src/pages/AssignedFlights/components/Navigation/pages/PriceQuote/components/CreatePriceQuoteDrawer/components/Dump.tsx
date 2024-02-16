import TextArea from 'antd/es/input/TextArea';
import { Form } from 'antd';
import { useState } from 'react';
import useGetDump from '@hooks/useGetDump.ts';

const Dump = ({ flightId, postGetDump }: { flightId: number }) => {
  const handleChangeInput = (e) => {
    postGetDump({ flightId, data: { dump: e.target.value } });
  };

  return (
    <>
      <Form.Item name="dump">
        <TextArea
          name="dump"
          autoSize={{ minRows: 12, maxRows: 14 }}
          onChange={handleChangeInput}
        />
      </Form.Item>
    </>
  );
};

export default Dump;
