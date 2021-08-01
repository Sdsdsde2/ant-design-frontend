import React, { Component } from 'react'
import Login from './auth/login'

import { PageHeader, Avatar, Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/profile");
    }
    
    render() {
        return (
            <div>
                <PageHeader
                className="site-page-header"
                title="Login"
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
                    icon={<UserOutlined />}
                    className="avatar"
                />

                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />

                <div className="login-register-option">
                    <h3>Don't have an account?</h3>
                    <h5>You can register here!</h5>
                    <Button>Register</Button>
                </div>
          </div>
        )
    }
}