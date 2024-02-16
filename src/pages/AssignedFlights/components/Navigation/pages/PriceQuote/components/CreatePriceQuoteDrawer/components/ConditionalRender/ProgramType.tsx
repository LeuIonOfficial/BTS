import { Col, Form, InputNumber, Row, Select } from 'antd';
import { fareTypeOptions, SALETYPE, select } from '../../constants.ts';

const ProgramType = () => {
  return (
    <Form.Item
      noStyle
      shouldUpdate={(prevValues, currentValues) =>
        prevValues['sale-type'] !== currentValues['sale-type']
      }
    >
      {({ getFieldValue }) =>
        getFieldValue('sale-type' as any) === SALETYPE.MIX ? (
          <div className="flex items-center justify-center flex-col gap-y-4">
            <h1>Program Type</h1>
            {select.map((select, key) => (
              <Select style={{ minWidth: '200px' }}></Select>
            ))}
          </div>
        ) : null
      }
    </Form.Item>
  );
};

export default ProgramType;
