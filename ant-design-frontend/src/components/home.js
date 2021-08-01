import React, { Component } from 'react'
import { PageHeader, Avatar, Carousel } from 'antd';
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

                <div className="ant-carousel-container">
                    <Carousel className="ant-carousel" autoplay effect="fade">
                        <div>
                            <h1>Welcome to the Project Tracker</h1>
                            <h3>some background information</h3>
                            <h3>information related to the most recent update</h3>
                            <h3>lets get started!</h3>
                        </div>
                        <div>
                            <h1>Getting Started</h1>
                            <h3>if you are new here you can register</h3>
                            <h3>once you have an account you can use the app</h3>
                            <h3>once you use the app you've used the app</h3>
                        </div>
                        <div>
                            <h1>Returning Users</h1>
                            <h3>if you aren't new here you can login</h3>
                            <h3>once you have signed in you can use the app</h3>
                            <h3>once you use the app you've used the app</h3>
                        </div>
                    </Carousel>
                </div>
          </div>
        )
    }
}