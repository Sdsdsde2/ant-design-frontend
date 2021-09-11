import React, { Component } from 'react'
import { PageHeader, Typography, Table, Input, Menu, Dropdown, Button, Modal, Steps } from 'antd';
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons'

export default class Services extends Component {
    constructor(props) {
        super();

        this.state = {
            businessVisible: false,
            personalVisible: false,
            currentStep: 0
        }
    }

    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="Services"
                >
                    <Typography className="ant-categories-label">
                        View Categories
                    </Typography>
                </PageHeader>

                <Input 
                    className="ant-service-search"
                    placeholder="Search services"
                    prefix={ <SearchOutlined /> }
                />

                <Button className="ant-create-service">
                        Create Client
                </Button>

                <Typography className="ant-empty-services-label">
                        You have not created any services yet!
                </Typography>

                <p>
                    Click the "Create Service" button to get started.
                </p>
          </div>
        )
    }
}