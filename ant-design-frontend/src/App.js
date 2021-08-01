import './App.css';
import { Layout, Menu, Dropdown, PageHeader, Avatar, Form, Input, Switch, Button, Divider } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const {SubMenu} = Menu;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="ant-header">
          <div className="logo" />
          <Menu mode="horizontal">
            <Menu.Item key="0">Clients</Menu.Item>
            <Menu.Item key="1">Services</Menu.Item>
            <Menu.Item key="2">Projects</Menu.Item>
            <Menu.Item key="3">Teams</Menu.Item>

            <SubMenu key="sub1" title="Mona Lisa" className="ant-submenu">
              <Menu.Item key="4">Profile settings</Menu.Item>
              <Menu.Item key="5">Changelog</Menu.Item>
              <Menu.Item key="6" className="ant-logout">Log out</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>

        <Content className="ant-content">
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

          <Form
            name="basic"
            layout="vertical"
            className="ant-form"
          >

            <Form.Item
              label="Full name"
              name="fullname"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Timezone"
              name="timezone"
            >
              <Input />
            </Form.Item>

            <Form.Item label="Preferences">
              <p className="ant-slider-title">Notify me when tasks are updated</p>
              <Switch className="ant-slider"/>
              <p className="ant-slider-desc">Toggle on to receive notifications in your email when tasks are updated</p>
              <Divider className="ant-divider"/>
            </Form.Item>

            <Form.Item className="ant-slider-item">
              <p className="ant-slider-title">Notify me when projects are updated</p>
              <Switch className="ant-slider"/>
              <p className="ant-slider-desc">Toggle on to receive notifications in your email when projects are updated</p>
              <Divider className="ant-divider"/>
            </Form.Item>

            <Form.Item className="ant-slider-item">
              <p className="ant-slider-title">Notify me when client tasks are updated</p>
              <Switch className="ant-slider"/>
              <p className="ant-slider-desc">Toggle on to receive notifications in your email when client tasks are updated</p>
              <Divider className="ant-divider"/>
            </Form.Item>

            <Form.Item className="ant-slider-item">
              <p className="ant-slider-title">Dark Mode</p>
              <Switch className="ant-slider"/>
              <p className="ant-slider-desc">Toggle between light and dark mode</p>
              <Divider className="ant-divider"/>
            </Form.Item>

          </Form>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
