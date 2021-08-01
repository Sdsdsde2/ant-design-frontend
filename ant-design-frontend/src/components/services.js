import React, { Component } from 'react'
import { PageHeader, Avatar, Form, Input, Switch, Button, Divider } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

export default class Services extends Component {
    render() {
        return (
            <div>
                <PageHeader
                className="site-page-header"
                title="Services"
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

                <ul>
                    <li>First list item</li>
                    <li>Second list item</li>
                    <li>Third list item</li>
                    <li>Fourth list item</li>
                </ul>
          </div>
        )
    }
}