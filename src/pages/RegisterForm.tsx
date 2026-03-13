import {Form, Input, Button} from "antd";
 export default function RegisterForm(){
    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <Form
        onFinish={onFinish}
        style={{maxWidth: 400, marginBottom:40}}
        >
            <Form.Item
            name="name"
            rules={[{ required: true, message: "nhap ten"}]}
            >
                <Input placeholder="Name"/>
            </Form.Item>
            <Form.Item
            name="email"
            rules={[{ required: true, message:"nhap email"}]}
            >
                <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item
            name="password"
            rules={[{ required: true, message:"nhap pass"}]}
            >
                <Input.Password placeholder="Password"/>
            </Form.Item>
            <Button htmlType="submit" type="primary">
                Submit
            </Button>
        </Form>
    );
 }