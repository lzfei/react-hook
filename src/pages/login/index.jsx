import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Cookies from 'js-cookie'
import "./index.less";

function Login(props) {
  const [isLogin, setIsLogin] = useState(false);
  const onFinish = (values) => {
    Cookies.set('access_token', '123')
    setIsLogin(true)
    const { from } = props.location.state || { from: { pathname: "/" } };
    props.history.push(from)
  };
  return (
    <Row className="login">
      <Col span={7} className="login-left">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
        >
          <h1>欢迎登录</h1>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="123">
              忘记密码
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登 录
            </Button>
            去 <a href="123">注册!</a>
          </Form.Item>
        </Form>
      </Col>
      <Col span={17} className="login-svg">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 300"
        >
          <title>#139_authentication_twocolour</title>
          <path
            d="M85.61,131.19s-10.28,9.37-5.94,26.37c3,11.63,12.16,42.13-20.84,41.31l.84,7.52S92.74,210.72,98,182.56C104,150.73,85.61,131.19,85.61,131.19Z"
            fill="#1da57a"
          />
          <path
            d="M85.61,131.19s-10.28,9.37-5.94,26.37c3,11.63,12.16,42.13-20.84,41.31l.84,7.52S92.74,210.72,98,182.56C104,150.73,85.61,131.19,85.61,131.19Z"
            fill="#fff"
            opacity="0.2"
          />
          <rect
            x="101.39"
            y="69.57"
            width="213.07"
            height="138.44"
            fill="#c9c9c9"
            opacity="0.27"
          />
          <polygon
            points="191.83 192.2 183.73 243.61 237.71 243.61 225.3 192.2 191.83 192.2"
            fill="#c9c9c9"
          />
          <ellipse
            cx="209.37"
            cy="254.08"
            rx="136.85"
            ry="8.04"
            fill="#e6e6e6"
            opacity="0.45"
          />
          <rect
            x="101.39"
            y="176.39"
            width="213.07"
            height="31.62"
            fill="#e6e6e6"
          />
          <circle cx="209.12" cy="190.32" r="8.56" fill="#a5a5a5" />
          <rect
            x="171.42"
            y="234.6"
            width="75.91"
            height="16.52"
            fill="#e6e6e6"
          />
          <path
            d="M101.43,102s8.55-5.11,10.89,4.13,4.1,19.48,12.23,21.89-20.39-7.65-20.39-7.65Z"
            fill="#a5a5a5"
            opacity="0.4"
          />
          <circle cx="118.72" cy="83.38" r="3.73" fill="#24285b" />
          <circle cx="129.81" cy="83.38" r="3.73" fill="#1da57a" />
          <circle cx="140.26" cy="83.38" r="3.73" fill="#ffd200" />
          <path
            d="M90.63,247.68s-1.89,2.68-4.64,2.17-4.17,1.93-1.94,3.28,9.31-.06,9.31-.06l.89-3.93Z"
            fill="#1da57a"
          />
          <path
            d="M139.12,131.19s10.06.05,13.21,20.78,6.92,55.15-27.78,55.51h0V182.85Z"
            fill="#a5a5a5"
            opacity="0.4"
          />
          <path
            d="M109.56,120.4s28.38,0,31.72,15.75S126.52,199,126.52,199l-32-1.38s1.34-17.52-3.49-31.69S68.19,126.3,109.56,120.4Z"
            fill="#1da57a"
          />
          <path
            d="M124.55,138.05s-9,9.07-4.46,23.44-26.73,14-26.73,14a91,91,0,0,1,1,9.07S108,194.81,129,192.18l1.26-3.6,5.39-13.24Z"
            opacity="0.08"
          />
          <path
            d="M90.28,104.7s1.89,5.78,4.4,9.08a3.05,3.05,0,0,0,4.29.57,6.72,6.72,0,0,0,2.86-6.73l-.4-5.59a5.45,5.45,0,0,0-4.49-4.42C92.82,96.68,89,101.24,90.28,104.7Z"
            fill="#f4a28c"
          />
          <polygon
            points="102.64 105.14 109.56 120.4 100.55 127.09 98.75 112.73 102.64 105.14"
            fill="#f4a28c"
          />
          <path
            d="M91.77,104.35a24.65,24.65,0,0,0,5-2.59,5.05,5.05,0,0,0,2.18,5.11,4.12,4.12,0,0,0,5.23-.43L101,99.3a6.18,6.18,0,0,0-5-3.85,21.33,21.33,0,0,0-2.9-.15c-2.42,0-4.86,2.71-7.31,2.11A1.46,1.46,0,0,0,84,99.2c.61,2.32,2.46,5.59,5.92,5.53A5.87,5.87,0,0,0,91.77,104.35Z"
            fill="#24285b"
          />
          <path
            d="M98.26,107s-.87-2.17.81-2.69,3,2.61.9,3.83Z"
            fill="#f4a28c"
          />
          <path
            d="M91.66,108.28,91,111.1a1,1,0,0,0,1.15,1.16l2.31-.5Z"
            fill="#f4a28c"
          />
          <path
            d="M99,114.35s2.06-2.83,2.07-4.66a8.94,8.94,0,0,1-1.43,9.89Z"
            fill="#ce8172"
            opacity="0.31"
          />
          <path
            d="M127.16,133.19a8.1,8.1,0,0,1,13.54,2.21c3.83,9,8.22,25,1.66,42.38-10,26.57-49.62-2.76-49.62-2.76l6-6.5s20.84,9.85,29.11,4.73C134.71,169,116.87,145.14,127.16,133.19Z"
            fill="#1da57a"
          />
          <path
            d="M127.16,133.19a8.1,8.1,0,0,1,13.54,2.21c3.83,9,8.22,25,1.66,42.38-10,26.57-49.62-2.76-49.62-2.76l6-6.5s20.84,9.85,29.11,4.73C134.71,169,116.87,145.14,127.16,133.19Z"
            fill="#fff"
            opacity="0.2"
          />
          <path
            d="M93.56,174.13s-6.94-1.36-7.46-6.87,7.61,2.62,9.05,0,4.18-2.72,3.54,1.26Z"
            fill="#f4a28c"
          />
          <path
            d="M118.78,236.28s2.44,2.19,1.6,4.86,1.41,4.38,3,2.33,1.08-9.25,1.08-9.25l-3.79-1.36Z"
            fill="#1da57a"
          />
          <path
            d="M94.25,249.14l-5.42-1.46,15.33-42.88L98,197.73,126.52,199a18.31,18.31,0,0,1-6.87,13.31,41.73,41.73,0,0,0-7.13,7.05A166,166,0,0,0,94.25,249.14Z"
            fill="#24285b"
          />
          <path
            d="M94.48,197.57l-.85,20.9a9.88,9.88,0,0,0,5.62,9.34l20,9.57,2-4.83-11.62-8.44a8.73,8.73,0,0,1-3.15-9.83l5.31-16Z"
            fill="#24285b"
          />
          <path
            d="M219.26,113.87h-5.2V101.7a7.51,7.51,0,1,0-15,0v12.17h-5.21V101.7a12.72,12.72,0,0,1,25.43,0Z"
            fill="#1da57a"
          />
          <path
            d="M219.26,113.87h-5.2V101.7a7.51,7.51,0,1,0-15,0v12.17h-5.21V101.7a12.72,12.72,0,0,1,25.43,0Z"
            fill="#fff"
            opacity="0.46"
          />
          <rect
            x="187.1"
            y="104.57"
            width="38.9"
            height="31.01"
            fill="#1da57a"
          />
          <path
            d="M210.08,115.84a4.11,4.11,0,1,0-8.21,0,4,4,0,0,0,1.33,3v8.72h5.64v-8.78A4.13,4.13,0,0,0,210.08,115.84Z"
            fill="#24285b"
          />
          <rect
            x="169.71"
            y="147.45"
            width="73.67"
            height="15.64"
            fill="#fff"
          />
          <rect
            x="220.64"
            y="147.45"
            width="22.74"
            height="15.64"
            fill="#ffd200"
          />
          <circle cx="179.15" cy="155.4" r="2.15" fill="#24285b" />
          <circle cx="187.14" cy="155.4" r="2.15" fill="#24285b" />
          <circle cx="194.94" cy="155.4" r="2.15" fill="#24285b" />
          <circle cx="202.93" cy="155.4" r="2.15" fill="#24285b" />
          <circle cx="211.1" cy="155.4" r="2.15" fill="#24285b" />
          <path
            d="M59.49,204.81s-10,.28-9.49-5.86,8.83-.08,8.83-.08Z"
            fill="#f4a28c"
          />
          <rect
            x="47.78"
            y="184.3"
            width="11.07"
            height="19.11"
            transform="translate(-138.85 134.73) rotate(-57.52)"
            fill="#ffd200"
          />
          <rect
            x="282.73"
            y="107.99"
            width="31.74"
            height="17.16"
            fill="#a5a5a5"
            opacity="0.4"
          />
          <path
            d="M50,172.67S21.64,64.48,84,33.5c14.08-7,103.19-25,187.38,18.17"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeDasharray="2 10"
            opacity="0.12"
          />
          <path
            d="M322.33,241.51s-8.51-2.33-10.36-10.26c0,0,13.19-2.66,13.56,11Z"
            fill="#1da57a"
            opacity="0.58"
          />
          <path
            d="M323.38,240.66s-5.95-9.4-.72-18.2c0,0,10,6.37,5.58,18.22Z"
            fill="#1da57a"
            opacity="0.73"
          />
          <path
            d="M324.91,240.67s3.14-9.93,12.64-11.82c0,0,1.79,6.45-6.15,11.84Z"
            fill="#1da57a"
          />
          <polygon
            points="318.73 240.44 320.46 252.25 331.33 252.3 332.93 240.5 318.73 240.44"
            fill="#24285b"
          />
          <rect x="275" y="56.42" width="53.17" height="53.17" fill="#24285b" />
          <polyline
            points="291.17 82.5 297.35 92.78 312.17 73.22"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      </Col>
    </Row>
  );
}
export default Login;
