import { Layout, Menu } from "antd";
import UserTable from "./UserTable";
import RegisterForm from "./RegisterForm";

const {Header, Sider, Content} = Layout;

export default function App(){
    return (
        <Layout style={{minHeight:"100vh"}}>
            <Sider>
                <Menu
                theme="dark"
                items={[
                    {key: "1", label: "Dashboard"},
                    {key: "2", label: "User"}
                ]}
            />
            </Sider>
            <Layout>
                <Header style={{color:"white"}}>
                    Dashboard
                </Header>
                <Content style={{padding: 20}}>
                    <RegisterForm />
                    <UserTable />
                </Content>
            </Layout>
        </Layout>
    );
}