import './App.css';
import { Layout, Menu, PageHeader, Avatar, Form, Input, Button } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: 'white' }}>
          <div className="logo" />
          <Menu mode="horizontal">
            <Menu.Item key="0">Clients</Menu.Item>
            <Menu.Item key="1">Services</Menu.Item>
            <Menu.Item key="2">Projects</Menu.Item>
            <Menu.Item key="3">Teams</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 80px' }}>
          <PageHeader
            className="site-page-header"
            title="Profile"
          />

          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            icon={<AntDesignOutlined />}
            className="avatar"
          />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
