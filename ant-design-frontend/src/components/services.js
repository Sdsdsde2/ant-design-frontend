import React, { Component } from 'react'
import { PageHeader, Typography, Table, Input, Menu, Dropdown, Button, Modal, Steps } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

// TODO: Change out this 'data' array with services info from backend
const data = [
    // {
    //     key: 7,
    //     client: 'Ant Design Title 1',
    //     email: 'fakeemail@gmail.com'
    // },
    // {
    //     key: 8,
    //     client: 'Ant Design Title 2',
    //     email: 'fakeemail@gmail.com'
    // },
    // {
    //     key: 9,
    //     client: 'Ant Design Title 3',
    //     email: 'fakeemail@gmail.com'
    // }
];

const columns = [
    {
      title: 'SERVICE NAME',
      dataIndex: 'service',
      key: 'service',
      width: '65%',
    },
    {
      title: 'ACTIONS',
      dataIndex: 'actions',
      key: 'actions',
      width: '20%',
    }
];

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

                <div>
                    <Typography className="ant-empty-services-label">
                            You have not created any services yet!
                    </Typography>

                    <p>
                        Click the "Create Service" button to get started.
                    </p>
                </div>

                <Table columns={columns} dataSource={data} />
          </div>
        )
    }
}