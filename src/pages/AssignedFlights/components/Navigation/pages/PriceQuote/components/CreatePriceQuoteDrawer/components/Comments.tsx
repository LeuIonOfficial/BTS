import TextArea from 'antd/es/input/TextArea';
import { Form } from 'antd';

const Comments = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <h1>Other comments</h1>
      <Form.Item name="comments">
        <TextArea></TextArea>
      </Form.Item>
    </div>
  );
};

export default Comments;
