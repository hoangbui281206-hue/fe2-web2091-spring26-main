import { Table } from "antd";

const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "Major" },

    {
        title: "Action",
        render: (_: any, record: any) => (
            <>
                <button onClick={() => console.log(record)}>Edit</button>
                <button onClick={() => console.log(record.id)}>Delete</button>
            </>
        ),
    },
];

const data = [
    { id: 1, name: "demo", age: 11, Major: "bán hàng" },
    { id: 2, name: "demo1", age: 12, Major: "xây" },
    { id: 3, name: "demo2", age: 13, Major: "ship" },
];

export default function DemoTable() {
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{ pageSize: 3 }}
        />
    );
}