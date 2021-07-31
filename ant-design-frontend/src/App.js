import './App.css';
import { Layout, Menu, PageHeader, Avatar, Form, Input, Switch, Button, Divider } from 'antd';
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

          <Form
            name="basic"
            layout="vertical"
            style={{ 
              float: 'left',
              paddingLeft: '20px',
              width: "275px" 
            }}
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
              <p style={{width: "350px", marginBottom: "-10px", paddingLeft: "55px", textAlign: "left"}}>Notify me when tasks are updated</p>
              <Switch style={{float: "left"}}/>
              <p style={{marginTop: "-10px", width: "500px", float: "left", fontSize: "12px", paddingLeft: "55px", textAlign: "left", color: "grey"}}>Toggle on to receive notifications in your email when tasks are updated</p>
              <Divider style={{borderTop: "2px solid grey", opacity: "30%"}}/>
            </Form.Item>

            <Form.Item style={{marginTop: "-45px"}}>
              <p style={{width: "350px", marginBottom: "-10px", paddingLeft: "55px", textAlign: "left"}}>Notify me when projects are updated</p>
              <Switch style={{float: "left"}}/>
              <p style={{marginTop: "-10px", width: "500px", float: "left", fontSize: "12px", paddingLeft: "55px", textAlign: "left", color: "grey"}}>Toggle on to receive notifications in your email when projects are updated</p>
              <Divider style={{borderTop: "2px solid grey", opacity: "30%"}}/>
            </Form.Item>

            <Form.Item style={{marginTop: "-45px"}}>
              <p style={{width: "350px", marginBottom: "-10px", paddingLeft: "55px", textAlign: "left"}}>Notify me when client tasks are updated</p>
              <Switch style={{float: "left"}}/>
              <p style={{marginTop: "-10px", width: "500px", float: "left", fontSize: "12px", paddingLeft: "55px", textAlign: "left", color: "grey"}}>Toggle on to receive notifications in your email when client tasks are updated</p>
              <Divider style={{borderTop: "2px solid grey", opacity: "30%"}}/>
            </Form.Item>

            <Form.Item style={{marginTop: "-45px"}}>
              <p style={{width: "350px", marginBottom: "-10px", paddingLeft: "55px", textAlign: "left"}}>Dark Mode</p>
              <Switch style={{float: "left"}}/>
              <p style={{marginTop: "-10px", width: "500px", float: "left", fontSize: "12px", paddingLeft: "55px", textAlign: "left", color: "grey"}}>Toggle between light and dark mode</p>
              <Divider style={{borderTop: "2px solid grey", opacity: "30%"}}/>
            </Form.Item>

          </Form>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
