import React, { Component } from 'react'
import { Layout, Menu, Dropdown, PageHeader, Avatar, Form, Input, Switch, Button, Divider } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

export default class Clients extends Component {
    render() {
        return (
            <div>
                <PageHeader
                className="site-page-header"
                title="Clients"
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
          </div>
        )
    }
}