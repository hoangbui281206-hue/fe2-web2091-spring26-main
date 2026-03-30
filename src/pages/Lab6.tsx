import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { message } from "antd";

export default function StoryId() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        },
        enabled: !!id,
    });

    const [form] = Form.useForm();
    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data, form]);

    const onFinish = (values: any) => {
        console.log(values);
        mutate(values);
    };

    const { mutate, isPending } = useMutation({
        mutationFn: async (values: any) => {
            await axios.put(`http://localhost:3000/stories/${id}`, values);
        },
        onSuccess: () => {
            message.success("Cập nhật thành công!");
            navigate("/");
        },
    });
    return (
        <Form layout="vertical" form={form} onFinish={onFinish} disabled={isPending}>
            <Form.Item label="Ten truyen" name="title" rules={[{ required: true, message: "Nhập title!" }]}>
                <Input />
            </Form.Item>

            <Form.Item label="tác giả" name="author" rules={[{ required: true, message: "Nhập author!" }]}>
                <Input />
            </Form.Item>

            <Form.Item label="ngày" name="date">
                <Input type="date" />
            </Form.Item>

            <Form.Item label="mô tả" name="description">
                <Input.TextArea />
            </Form.Item>

            <Button htmlType="submit" loading={isPending}>
                Submit
            </Button>z
        </Form>
    );
}