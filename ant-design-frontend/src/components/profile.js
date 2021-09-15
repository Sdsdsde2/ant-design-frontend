import React, { Component } from 'react'
import { PageHeader, Avatar, Form, Input, Switch, Divider } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

// TODO: Re-write as Functional components and use Hooks instead
export default class Profile extends Component {
    checkLogin() {
        if (this.props.loggedInStatus === "NOT_LOGGED_IN")
            this.props.history.push("/");
    }
    
    render() {
        return (
            <div>
                {this.checkLogin()}
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
                        <Input placeholder={this.props.user.first_name + ' ' + this.props.user.last_name}/>
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input placeholder={"thisisafakeemail@gmail.com"}/>
                    </Form.Item>

                    <Form.Item
                        label="Timezone"
                        name="timezone"
                    >
                        <Input placeholder={"CST: UTC−06:00"}/>
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
          </div>
        )
    }
}