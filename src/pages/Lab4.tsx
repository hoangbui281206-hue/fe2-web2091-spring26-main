import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";

interface Story {
    title: string;
    author: string;
    description: string;
    date: string;
}

const AddCategory = () => {
    const mutation = useMutation({
        mutationFn: (data: Story) =>
            axios.post("http://localhost:3000/stories", data),
    });

    const onFinish = (values: Story) => {
        mutation.mutate(values);
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item label="tên truyện" name="title" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="tác giả" name="author" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="ngày" name="date" rules={[{ required: true }]}>
                <Input type="date" />
            </Form.Item>

            <Form.Item label="mô tả" name="description">
                <Input.TextArea />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={mutation.isPending}>
                Submit
            </Button>
        </Form>
    );
};

export default AddCategory;