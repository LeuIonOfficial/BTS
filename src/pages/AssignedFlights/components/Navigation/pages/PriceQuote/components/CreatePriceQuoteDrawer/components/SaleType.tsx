import { Select, Form } from 'antd';
import { SALETYPE, saleTypeOptions } from '../constants.ts';

const SaleType = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <h1>Sale Type</h1>
      <Form.Item name="sale-type">
        <Select style={{ maxWidth: '100%' }}>
          {saleTypeOptions.map((element, index) => (
            <Select.Option value={element.value} key={index}>
              {element.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default SaleType;
