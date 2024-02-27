import { Col, Form, Input, Row, Typography } from 'antd';
import { SALETYPE } from '../../constants';
import { NamePath } from 'antd/lib/form/interface';
import { MilesPrice } from './ProgramType';

const PassengerInputRow = ({
  passengerType,
  isReadOnly = false,
}: {
  passengerType: string;
  isReadOnly?: boolean;
}) => (
  <Row gutter={[12, 12]}>
    <Col span={6} className="flex items-center">
      <Typography>{`Selling ${passengerType}`}</Typography>
    </Col>
    <Col span={6}>
      <Form.Item noStyle>
        <Input placeholder={passengerType} readOnly={isReadOnly}></Input>
      </Form.Item>
    </Col>
    <Col span={6}>
      <Form.Item noStyle>
        <Input readOnly addonAfter="Net Price" placeholder="Autofilled"></Input>
      </Form.Item>
    </Col>
    <Col span={6}>
      <Form.Item noStyle>
        <Input readOnly addonAfter="Gross Profit" placeholder="Autofilled"></Input>
      </Form.Item>
    </Col>
  </Row>
);

const MixTypeCalculations = ({ data }: { data: MilesPrice[] }) => {
  return (
    <Form.Item
      noStyle
      shouldUpdate={(prevValues, currentValues) =>
        prevValues['sale-type'] !== currentValues['sale-type']
      }
    >
      {({ getFieldValue }) =>
        getFieldValue('sale-type' as NamePath) === SALETYPE.MIX ? (
          <div className="flex flex-col gap-y-4">
            {data?.map(({ label, value }, index) => {
              if (value === 'Revenue Option') {
                return (
                  <Row gutter={[12, 12]} key={index}>
                    <Col span={6} className="flex items-center">
                      <Typography>
                        <span>Revenue Cost</span>
                      </Typography>
                    </Col>
                    <Col span={6}>
                      <Input addonAfter="Net Price"></Input>
                    </Col>
                  </Row>
                );
              }

              return (
                <Row gutter={[12, 12]} key={index}>
                  <Col span={6} className="flex items-center">
                    <Typography>{label}</Typography>
                  </Col>
                  <Col span={6}>
                    <Form.Item noStyle>
                      <Input addonAfter="Total Miles" placeholder="0"></Input>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item noStyle>
                      <Input addonAfter="Taxes" placeholder="0"></Input>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item noStyle>
                      <Input readOnly addonAfter="Total" placeholder="Autofilled"></Input>
                    </Form.Item>
                  </Col>
                </Row>
              );
            })}
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues['adults'] !== currentValues['adults']
              }
            >
              {({ getFieldValue }) =>
                getFieldValue('adults' as NamePath) > 0 ? (
                  <PassengerInputRow passengerType="Adult" />
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
                  <PassengerInputRow passengerType="Child" />
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
                  <PassengerInputRow passengerType="Infants" />
                ) : null
              }
            </Form.Item>
          </div>
        ) : null
      }
    </Form.Item>
  );
};

export default MixTypeCalculations;
