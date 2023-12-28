import { Card, Col, Row, Statistic } from "antd";
import {
  ArrowUpOutlined,
  AuditOutlined,
  BellOutlined,
} from "@ant-design/icons";

const SubHeader = () => {
  return (
    <div className="m-[10px]">
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false} hoverable={true}>
            <Statistic
              title="Active"
              value={3000}
              valueStyle={{ color: "#059e9b" }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} hoverable={true}>
            <Statistic
              title="Assigned"
              value={1500}
              valueStyle={{ color: "#1677ff" }}
              prefix={<AuditOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} hoverable={true}>
            <Statistic
              title="Unassigned"
              value={1}
              valueStyle={{ color: "#cf1322" }}
              prefix={<BellOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default SubHeader;
