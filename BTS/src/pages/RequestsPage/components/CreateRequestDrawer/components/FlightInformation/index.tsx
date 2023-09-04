import { Col, DatePicker, Input, InputNumber, Row, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import FormList from "antd/es/form/FormList";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { rules } from "../ClientInformation";

const FlightInformation = () => {
  return (
    <>
      <FormList name={"details"}>
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map((field, index) => {
                return (
                  <div key={index}>
                    <Row>
                      <Col span={12}>
                        <FormItem
                          rules={rules}
                          label={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M23 9.32a1.06 1.06 0 0 0-.1-.76a4.93 4.93 0 0 0-6.75-1.8L14 8L9 5.65a1 1 0 0 0-.92 0l-3 1.73a1 1 0 0 0-.5.84a1 1 0 0 0 .46.87l3.3 2.08l-1.74 1l-4.78.58a1 1 0 0 0-.53 1.75l3.54 3.06a3 3 0 0 0 3.55.44L22.5 9.93a1 1 0 0 0 .5-.61Zm-15.53 7a1 1 0 0 1-1.2-.18l-1.9-1.63l2.73-.33a1 1 0 0 0 .38-.13l3.36-1.93a1 1 0 0 0 .5-.85a1 1 0 0 0-.47-.86l-3.3-2.09l1.1-.63l5 2.32a1 1 0 0 0 .92 0l2.56-1.48a3 3 0 0 1 3.36.29Z"
                              />
                            </svg>
                          }
                        >
                          {index > 0 ? (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <h2 style={{ margin: 0 }}>Flight Details</h2>
                              <DeleteOutlined
                                style={{
                                  color: "#059e9b",
                                  marginRight: "15px",
                                }}
                                onClick={() => remove(field.name)}
                              />
                            </div>
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <h2 style={{ margin: 0 }}>Flight Details</h2>
                              <PlusOutlined
                                style={{
                                  color: "#059e9b",
                                  marginRight: "15px",
                                }}
                                onClick={() => add()}
                              />
                            </div>
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <FormItem
                          label="From"
                          name={[field.name, "iata_from"]}
                          key={field.key}
                          rules={rules}
                        >
                          <Input />
                        </FormItem>
                      </Col>
                      <Col span={12}>
                        <FormItem
                          label="Flight class"
                          name={[field.name, "flight_class"]}
                          rules={rules}
                        >
                          <Select
                            options={[
                              {
                                label: "Business",
                                value: "business",
                              },
                            ]}
                          ></Select>
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <FormItem
                          label="To"
                          name={[field.name, "iata_to"]}
                          key={field.key}
                          rules={rules}
                        >
                          <Input />
                        </FormItem>
                      </Col>
                      <Col span={12}>
                        <FormItem
                          label="Adults"
                          name={[field.name, "adults"]}
                          rules={rules}
                          initialValue={1}
                        >
                          <InputNumber
                            min={0}
                            style={{ width: "100%" }}
                          ></InputNumber>
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <FormItem
                          label="Pick a date"
                          name={[field.name, "departure_date"]}
                          key={field.key}
                          rules={rules}
                        >
                          <DatePicker style={{ width: "100%" }} />
                        </FormItem>
                      </Col>
                      <Col span={12}>
                        <FormItem
                          label="Child"
                          name={[field.name, "child"]}
                          initialValue={0}
                        >
                          <InputNumber
                            min={0}
                            style={{ width: "100%" }}
                          ></InputNumber>
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}></Col>
                      <Col span={12}>
                        <FormItem
                          label="Infants"
                          name={[field.name, "infants"]}
                          initialValue={0}
                        >
                          <InputNumber
                            min={0}
                            style={{ width: "100%" }}
                          ></InputNumber>
                        </FormItem>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </>
          );
        }}
      </FormList>
    </>
  );
};

export default FlightInformation;
