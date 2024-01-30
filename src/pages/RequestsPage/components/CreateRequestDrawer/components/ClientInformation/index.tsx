import { Col, Input, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import FormList from 'antd/es/form/FormList';
import { DeleteOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { marketingSource } from '@helpers/MarketingSource';

export const rules = [
  {
    required: true,
    message: "This field can't be empty",
  },
];

const ClientInformation = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <FormItem label={<UserOutlined style={{ fontSize: '25px', fontWeight: 700 }} />}>
            <h2 className="m-0 font-bold text-xl">Personal Info</h2>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormItem label="First Name" name="first_name" rules={rules}>
            <Input />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Last Name" name="last_name" rules={rules}>
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormList name="emails">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map((field, index) => {
                    return (
                      <div key={index}>
                        <FormItem label={`Email`} name={[field.name]} key={field.key} rules={rules}>
                          {index === 0 ? (
                            <Input
                              suffix={
                                <PlusOutlined style={{ color: '#059e9b' }} onClick={() => add()} />
                              }
                            />
                          ) : (
                            <Input
                              suffix={
                                <DeleteOutlined
                                  style={{ color: '#059e9b' }}
                                  onClick={() => remove(field?.name)}
                                />
                              }
                            />
                          )}
                        </FormItem>
                      </div>
                    );
                  })}
                </>
              );
            }}
          </FormList>
        </Col>
        <Col span={12}>
          <FormList name="phones">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map((field, index) => {
                    return (
                      <div key={index}>
                        <FormItem label={`Phone`} name={[field.name]} key={field.key} rules={rules}>
                          {index === 0 ? (
                            <Input
                              suffix={
                                <PlusOutlined style={{ color: '#059e9b' }} onClick={() => add()} />
                              }
                            />
                          ) : (
                            <Input
                              suffix={
                                <DeleteOutlined
                                  style={{ color: '#059e9b' }}
                                  onClick={() => remove(field?.name)}
                                />
                              }
                            />
                          )}
                        </FormItem>
                      </div>
                    );
                  })}
                </>
              );
            }}
          </FormList>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormItem label="Marketing source" name="marketing_source" rules={rules}>
            <Select options={marketingSource.map((el) => ({ name: el, value: el }))} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Notes" name="notes">
            <TextArea autoSize={{ minRows: 4, maxRows: 6 }} />
          </FormItem>
        </Col>
      </Row>
    </>
  );
};

export default ClientInformation;
