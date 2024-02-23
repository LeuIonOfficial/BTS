import TextArea from 'antd/es/input/TextArea';
import { Form, FormInstance } from 'antd';
import { useEffect, useState } from 'react';
import { NamePath } from 'antd/lib/form/interface';

const Dump = ({
  flightId,
  postGetDump,
  form,
}: {
  flightId: number;
  postGetDump: (data: { flightId: number; data: { dump: string } }) => void;
  form: FormInstance;
}) => {
  const [content, setContent] = useState(form.getFieldValue('dump' as NamePath));

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    postGetDump({ flightId, data: { dump: content } });
  }, [content]);

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
