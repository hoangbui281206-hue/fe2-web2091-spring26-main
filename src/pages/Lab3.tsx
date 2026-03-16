import { Form, Input, Button } from "antd";

export default function LapForm() {

    const loginSubmit = (values: any) => {
        console.log(values);
    };

    const registerSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <div style={{ width: 400, margin: "auto" }}>

            <h2>Login</h2>

            <Form onFinish={loginSubmit} layout="vertical">

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Nhập email" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Nhập password" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Login
                </Button>

            </Form>


            <h2 style={{ marginTop: 30 }}>Register</h2>

            <Form onFinish={registerSubmit} layout="vertical">

                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ type: "email", message: "Email không đúng" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ min: 6, message: "Ít nhất 6 ký tự" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirm"
                >
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Register
                </Button>

            </Form>

        </div>
    );
}