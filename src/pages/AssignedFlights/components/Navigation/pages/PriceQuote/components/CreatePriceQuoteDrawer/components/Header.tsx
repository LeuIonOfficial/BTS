import { Checkbox, Form, InputNumber } from 'antd';
import { NamePath } from 'antd/lib/form/interface';

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Form.Item name="useAPI" valuePropName="checked">
        <Checkbox name="useAPI">Use API</Checkbox>
      </Form.Item>
      {/*<div className="flex gap-x-6">*/}
      {/*  {passengers.adults ? (*/}
      {/*    <Form.Item name={'adults' as NamePath} initialValue={passengers.adults}>*/}
      {/*      <InputNumber addonAfter={'Adults'} style={{ maxWidth: '200px' }} name={'adults'} />*/}
      {/*    </Form.Item>*/}
      {/*  ) : null}*/}
      {/*  {passengers.child ? (*/}
      {/*    <Form.Item name={'child' as NamePath} initialValue={passengers.child}>*/}
      {/*      <InputNumber addonAfter={'Child'} style={{ maxWidth: '200px' }} name={'child'} />*/}
      {/*    </Form.Item>*/}
      {/*  ) : null}*/}
      {/*  {passengers.infants ? (*/}
      {/*    <Form.Item name={'infants' as NamePath} initialValue={passengers.infants}>*/}
      {/*      <InputNumber addonAfter={'Infants'} style={{ maxWidth: '200px' }} name={'infants'} />*/}
      {/*    </Form.Item>*/}
      {/*  ) : null}*/}
      {/*</div>*/}
      <div className="flex gap-x-6">
        <Form.Item name={'adults' as NamePath}>
          <InputNumber addonAfter={'Adults'} style={{ maxWidth: '200px' }} name={'adults'} />
        </Form.Item>

        <Form.Item name={'child' as NamePath}>
          <InputNumber addonAfter={'Child'} style={{ maxWidth: '200px' }} name={'child'} />
        </Form.Item>

        <Form.Item name={'infants' as NamePath}>
          <InputNumber addonAfter={'Infants'} style={{ maxWidth: '200px' }} name={'infants'} />
        </Form.Item>
      </div>
    </div>
  );
};

export default Header;
