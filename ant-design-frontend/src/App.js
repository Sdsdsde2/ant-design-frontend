import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { Layout, Menu } from 'antd';
import Profile from './components/profile';

const { Header, Content } = Layout;

const {SubMenu} = Menu;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header className="ant-header">
            <div className="logo" />
            <Menu mode="horizontal">
              <Menu.Item key="0">Clients</Menu.Item>
              <Menu.Item key="1">Services</Menu.Item>
              <Menu.Item key="2">Projects</Menu.Item>
              <Menu.Item key="3">Teams</Menu.Item>

              <SubMenu key="sub1" title="Mona Lisa" className="ant-submenu">
                <Menu.Item key="4"><Link to="/profile">Profile settings</Link></Menu.Item>
                <Menu.Item key="5">Changelog</Menu.Item>
                <Menu.Item key="6" className="ant-logout">Log out</Menu.Item>
              </SubMenu>
            </Menu>
          </Header>

          <Content className="ant-content">
            <Switch>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
