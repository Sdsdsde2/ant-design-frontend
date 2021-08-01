import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { Layout, Menu } from 'antd';

import Home from './components/home';
import Login from './components/login';
import Clients from './components/clients';
import Services from './components/services'
import Projects from './components/projects';
import Changelog from './components/changelog';
import Profile from './components/profile';

const { Header, Content } = Layout;
const { SubMenu } = Menu;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      tasks: {},
      userTasks: {}
    }

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/profile");
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
      userTasks: data.user.tasks
    })
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Header className="ant-header">
              <div className="logo" />
              <Menu mode="horizontal">
                <Menu.Item key="0"><Link to="/clients">Clients</Link></Menu.Item>
                <Menu.Item key="1"><Link to="/services">Services</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/projects">Projects</Link></Menu.Item>
                <Menu.Item key="3">Teams</Menu.Item>

                <SubMenu key="sub1" title={this.state.user.first_name} className="ant-submenu">
                  <Menu.Item key="4"><Link to="/profile">Profile settings</Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/changelog">Changelog</Link></Menu.Item>
                  <Menu.Item key="6" className="ant-logout" onClick={this.handleLogout}>Log out</Menu.Item>
                </SubMenu>
              </Menu>
            </Header>

            <Content className="ant-content">
              <Link to="/" />

              <Switch>

                <Route exact path="/">
                  <Home />
                </Route >

                <Route path="/login" render={props => (
                  <Login {... props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
                )} />

                <Route exact path="/clients">
                  <Clients />
                </Route>

                <Route exact path="/services">
                  <Services />
                </Route>

                <Route exact path="/projects">
                  <Projects />
                </Route>

                <Route exact path="/changelog">
                  <Changelog />
                </Route>

                <Route path="/profile" render={props => (
                  <Profile {... props} user={this.state.user} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />
                )} />

              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}