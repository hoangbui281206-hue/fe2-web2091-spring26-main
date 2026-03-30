import { Table, Button, Modal, Form, Input } from "antd";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UserTable() {
  const [open, setOpen] = useState(false);

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  const data: User[] = [
    { id: 1, name: "Hoang", email: "hoang@gmail.com", role: "Admin" },
    { id: 2, name: "An", email: "an@gmail.com", role: "User" },
  ];

  return (
    <>
      <Button
        type="primary"
        onClick={() => setOpen(true)}
        style={{ marginBottom: 20 }}
      >
        Add User
      </Button>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="id" // ✅ FIX LỖI KEY Ở ĐÂY
      />

      <Modal
        title="Add User"
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Role" name="role">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}