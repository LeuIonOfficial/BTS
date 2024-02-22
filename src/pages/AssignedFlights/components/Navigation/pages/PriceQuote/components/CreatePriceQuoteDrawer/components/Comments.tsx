import TextArea from 'antd/es/input/TextArea';
import { Form } from 'antd';

const Comments = () => {
  return (
    <div className="flex flex-col gap-y-2 mt-5">
      <span className="self-end mr-5">Other Notes</span>
      <Form.Item name="comments">
        <TextArea></TextArea>
      </Form.Item>
    </div>
  );
};

export default Comments;
