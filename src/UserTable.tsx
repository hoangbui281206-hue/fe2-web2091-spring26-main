import {Table, Button, Modal, Form, Input } from "antd";
import {useState} from "react";
interface User {
    key: number;
    name: string;
    email: string;
    role: string;
}
export default function UserTable(){
    const [open, setOpen] = useState(false);
    const columns =[
        { title: "Name", dataIndex: "name"},
        { title: "Email", dataIndex: "email"},
        { title: "Role", dataIndex: "role"}
    ];
    const data: User[] = [
        { key: 1, name: "Hoang", email: "hoang@gmail.com", role: "Admin" },
        { key: 2, name: "An", email: "an@gmail.com", role: "User" }
    ];
    return (
        <>
        <Button
        type="primary"
        onClick={() => setOpen(true)}
        style={{marginBottom:20}}
        >
            Add User
        </Button>
        <Table columns={columns} dataSource={data}/>
        <Modal
        title ="Add User"
        open={open}
        onCancel={() => setOpen(false)}
        onOk={()=> setOpen(false)}
        >
            <Form layout="vertical">
                <Form.Item label="Name">
                    <Input />
                </Form.Item>
            <Form.Item label="email">
                <Input />
            </Form.Item>
            <Form.Item label="Role">
                <Input />
            </Form.Item>
            </Form>
        </Modal>
        </>
    );
}