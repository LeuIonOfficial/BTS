import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { FARETYPE, fareTypeOptions, SALETYPE } from '../../constants.ts';

const FareType = ({ passengers }) => {
  return (
    <Form.Item
      noStyle
      shouldUpdate={(prevValues, currentValues) =>
        prevValues['sale-type'] !== currentValues['sale-type']
      }
    >
      {({ getFieldValue }) =>
        getFieldValue('sale-type' as any) === SALETYPE.REVENUE ? (
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <div className="flex flex-col gap-y-2">
                <h1>Fare Type</h1>
                <Form.Item name="fare-type">
                  <Select>
                    {fareTypeOptions.map((_, index) => (
                      <Select.Option value={_.value} key={index}>
                        {_.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                {passengers.adults ? (
                  <>
                    <div className="flex flex-row gap-x-4">
                      <Form.Item>
                        <InputNumber addonBefore="Selling Price" placeholder="Adult"></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber addonBefore="Net Price" placeholder="Adult"></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber addonBefore="Fare Price" placeholder="Adult"></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber
                          addonBefore="Gross Profit"
                          readOnly
                          placeholder="Adult"
                        ></InputNumber>
                      </Form.Item>
                    </div>
                  </>
                ) : null}

                {passengers.child ? (
                  <>
                    <div className="flex flex-row gap-x-4">
                      <Form.Item>
                        <InputNumber addonBefore="Selling Price" placeholder="Child"></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber addonBefore="Net Price" placeholder="Child"></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber addonBefore="Fare Price" placeholder="Child"></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber
                          addonBefore="Gross Profit"
                          readOnly
                          placeholder="Child"
                        ></InputNumber>
                      </Form.Item>
                    </div>
                  </>
                ) : null}
                {passengers.infants ? (
                  <>
                    <div className="flex flex-row gap-x-4">
                      <Form.Item>
                        <InputNumber
                          addonBefore="Selling Price"
                          placeholder="Infants"
                        ></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber addonBefore="Net Price" placeholder="Infants"></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber addonBefore="Fare Price" placeholder="Infants"></InputNumber>
                      </Form.Item>
                      <Form.Item>
                        <InputNumber
                          addonBefore="Gross Profit"
                          readOnly
                          placeholder="Infants"
                        ></InputNumber>
                      </Form.Item>
                    </div>
                  </>
                ) : null}
              </div>
            </Col>
          </Row>
        ) : null
      }
    </Form.Item>
  );
};

export default FareType;
