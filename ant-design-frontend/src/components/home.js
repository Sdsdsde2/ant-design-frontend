import React, { Component } from 'react'
import { PageHeader, Avatar, Form, Input, Switch, Divider } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <PageHeader
                className="site-page-header"
                title="Project Tracker"
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