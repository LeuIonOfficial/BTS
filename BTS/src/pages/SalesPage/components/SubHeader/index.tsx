import { Card, Col, Row, Statistic } from "antd";
import { ArrowUpOutlined, BellOutlined } from "@ant-design/icons";

const SalesSubHeader = () => {
  return (
    <Row gutter={16} style={{ margin: "10px" }}>
      <Col span={12}>
        <Card bordered={false} hoverable={true}>
          <Statistic
            title="Active"
            value={3000}
            valueStyle={{ color: "#059e9b" }}
            prefix={<ArrowUpOutlined />}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card bordered={false} hoverable={true}>
          <Statistic
            title="Rejected"
            value={1500}
            valueStyle={{ color: "#cf1322" }}
            prefix={<BellOutlined />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default SalesSubHeader;
