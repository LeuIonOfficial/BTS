import { Col, Form, InputNumber, Row, Select } from 'antd';
import { fareTypeOptions, SALETYPE } from '../../constants';
import { NamePath } from 'antd/lib/form/interface';

// Reusable component for passenger input fields
const PassengerInputFields = ({ passengerType }: { passengerType: string }) => (
  <div className="flex flex-row gap-x-4">
    <Form.Item>
      <InputNumber addonAfter="Selling Price" placeholder={passengerType}></InputNumber>
    </Form.Item>
    <Form.Item>
      <InputNumber addonAfter="Net Price" placeholder={passengerType}></InputNumber>
    </Form.Item>
    <Form.Item>
      <InputNumber addonAfter="Fare Price" placeholder={passengerType}></InputNumber>
    </Form.Item>
    <Form.Item>
      <InputNumber addonAfter="Gross Profit" readOnly placeholder={'Autofilled'}></InputNumber>
    </Form.Item>
  </div>
);

const FareType = () => {
  return (
    <Form.Item
      noStyle
      shouldUpdate={(prevValues, currentValues) =>
        prevValues['sale-type'] !== currentValues['sale-type']
      }
    >
      {({ getFieldValue }) =>
        getFieldValue('sale-type' as NamePath) === SALETYPE.REVENUE ? (
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <div className="flex flex-col gap-y-2">
                <h1>Fare Type</h1>
                <Form.Item name="fare-type">
                  <Select>
                    {fareTypeOptions.map((option) => (
                      <Select.Option value={option.value} key={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) =>
                    prevValues['adults'] !== currentValues['adults']
                  }
                >
                  {({ getFieldValue }) =>
                    getFieldValue('adults' as NamePath) > 0 ? (
                      <PassengerInputFields passengerType="Adult" />
                    ) : null
                  }
                </Form.Item>
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) =>
                    prevValues['child'] !== currentValues['child']
                  }
                >
                  {({ getFieldValue }) =>
                    getFieldValue('child' as NamePath) > 0 ? (
                      <PassengerInputFields passengerType="Child" />
                    ) : null
                  }
                </Form.Item>
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) =>
                    prevValues['infants'] !== currentValues['infants']
                  }
                >
                  {({ getFieldValue }) =>
                    getFieldValue('infants' as NamePath) > 0 ? (
                      <PassengerInputFields passengerType="Infants" />
                    ) : null
                  }
                </Form.Item>
              </div>
            </Col>
          </Row>
        ) : null
      }
    </Form.Item>
  );
};

export default FareType;
