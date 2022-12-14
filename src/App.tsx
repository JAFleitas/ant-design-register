import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import { Col, Row } from "antd/es/grid";
import {
  LockFilled,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import image from "./assets/desktop.jpeg";
const { Title } = Typography;
function App() {
  return (
    <>
      <Card
        bordered={false}
        style={{ minWidth: "1000px", minHeight: "700px", padding: "60px" }}
      >
        <Row>
          <Col span={12}>
            <Typography>
              <Title style={{ fontWeight: 800 }}>Sign Up</Title>
            </Typography>
            <br />
            <Form style={{ gap: "8px" }}>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  style={{
                    borderBottom: "1px solid #0f0f0f",
                    borderRadius: "0",
                    padding: "7px 0px",
                  }}
                  placeholder="Your name"
                  bordered={false}
                  prefix={<UserOutlined style={{ marginRight: "6px" }} />}
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  style={{
                    borderBottom: "1px solid #0f0f0f",
                    borderRadius: "0",
                    padding: "7px 0px",
                  }}
                  placeholder="Your email"
                  bordered={false}
                  prefix={<MailOutlined style={{ marginRight: "6px" }} />}
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  style={{
                    borderBottom: "1px solid #0f0f0f",
                    borderRadius: "0",
                    padding: "7px 0px",
                  }}
                  placeholder="Password"
                  bordered={false}
                  prefix={<LockOutlined style={{ marginRight: "6px" }} />}
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="repeatpassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password again!",
                  },
                ]}
              >
                <Input
                  style={{
                    borderBottom: "1px solid #0f0f0f",
                    borderRadius: "0",
                    padding: "7px 0px",
                  }}
                  placeholder="Repeat your password"
                  bordered={false}
                  prefix={<LockFilled style={{ marginRight: "6px" }} />}
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Checkbox>
                  I agree all statements in{" "}
                  <a style={{ textDecoration: "underline", color: "#1f1f1f" }}>
                    Terms of services
                  </a>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "20px",
              gap: "80px",
            }}
          >
            <img alt="desktop" src={image} />
            <a style={{ textDecoration: "underline", color: "#1f1f1f" }}>
              I am already member
            </a>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default App;
