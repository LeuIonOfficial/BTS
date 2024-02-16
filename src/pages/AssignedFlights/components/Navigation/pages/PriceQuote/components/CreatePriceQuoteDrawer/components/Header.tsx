import { Checkbox, Form, InputNumber } from 'antd';
import FormItem from 'antd/es/form/FormItem';

const Header = ({ passengers }) => {
  console.log(passengers);
  return (
    <div className="flex items-center justify-between">
      <Form.Item name="useAPI" valuePropName="checked">
        <Checkbox name="useAPI">Use API</Checkbox>
      </Form.Item>
      <div className="flex gap-x-6">
        {passengers.adults ? (
          <Form.Item name={'adults'} initialValue={passengers.adults}>
            <InputNumber addonBefore={'Adults'} style={{ maxWidth: '200px' }} name={'adults'} />
          </Form.Item>
        ) : null}
        {passengers.child ? (
          <Form.Item name={'child'} initialValue={passengers.child}>
            <InputNumber addonBefore={'Child'} style={{ maxWidth: '200px' }} name={'child'} />
          </Form.Item>
        ) : null}
        {passengers.infants ? (
          <Form.Item name={'infants'} initialValue={passengers.infants}>
            <InputNumber addonBefore={'Infants'} style={{ maxWidth: '200px' }} name={'infants'} />
          </Form.Item>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
