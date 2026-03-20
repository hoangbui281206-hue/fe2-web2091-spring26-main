import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

interface Story {
  id?: number;
  title: string;
  description?: string;
  active: boolean;
  categoryId?: number;
}

const AddStory = () => {
  const [form] = Form.useForm();

  // GET categories
  const getCategories = async () => {
    const { data } = await axios.get("http://localhost:3000/categories");
    return data;
  };

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  // POST category
  const mutation = useMutation({
    mutationFn: async (values: Story) => {
      return await axios.post("http://localhost:3000/categories", values);
    },
    onSuccess: () => {
      alert("Thêm thành công");
      form.resetFields();
    },
  });

  const onFinish = (values: Story) => {
    mutation.mutate(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Title không được để trống" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="active" valuePropName="checked">
        <Checkbox>Active</Checkbox>
      </Form.Item>

      <Form.Item label="Category" name="categoryId">
        <Select
          placeholder="Chọn danh mục"
          options={categories?.map((item: any) => ({
            label: item.title,
            value: item.id,
          }))}
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        loading={mutation.isPending}
      >
        Submit
      </Button>

    </Form>
  );
};

export default AddStory;