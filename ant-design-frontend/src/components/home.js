import React, { Component } from 'react'
import { PageHeader, Avatar, Carousel } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

// TODO: Re-write as Functional components and use Hooks instead
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
                    <Carousel className="ant-carousel" autoplay speed="4500">
                        <div>
                            <h1>View Your Clients</h1>

                        </div>
                        <div>
                            <h1>View Your Services</h1>

                        </div>
                        <div>
                            <h1>View Your Projects</h1>

                        </div>
                        <div>
                            <h1>View Your Teams</h1>

                        </div>
                        <div>
                            <h1>Invite Team Members</h1>

                        </div>
                    </Carousel>
                </div>
          </div>
        )
    }
}