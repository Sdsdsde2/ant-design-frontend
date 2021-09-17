import React, { Component } from 'react'
import { PageHeader, Typography, Table, Input, Form, Button, Modal} from 'antd';
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

// TODO: Re-write as Functional components and use Hooks instead
export default class Services extends Component {
    constructor(props) {
        super();

        this.state = {
            servicesVisible: false,
            modalVisible: false,
            currentStep: 0
        }
    }

    displayServices() {
        // TODO: Change this to "if fetch resp size is above 0" when finish with backend
        if (this.state.servicesVisible === true)
            return (<Table columns={columns} dataSource={data} />)
        if (this.state.servicesVisible === false)
            return (
                <div>
                    <Typography className="ant-empty-services-label">
                            You have not created any services yet!
                    </Typography>

                    <p>
                        Click the "Create Service" button to get started.
                    </p>
                </div>
            )
    }

    render() {
        const newServiceModal = (
            <Modal
                title="Create Service"
                visible={this.state.modalVisible}
                onOk={() => {this.setState({modalVisible: false})}}
                className="ant-service-modal"
            >
                <Form
                    name="service-form"
                    layout="vertical"
                    className="ant-form"
                >
                    <Form.Item label="Service Name">
                        <Input
                            name="name"
                            placeholder="E.g monthly payroll" 
                        />
                    </Form.Item>

                    <Form.Item label="Description">
                        <Input
                            name="description"
                            placeholder="Provide a short description" 
                        />
                    </Form.Item>

                    <Form.Item label="Category">
                        <Input
                            name="category"
                        />
                    </Form.Item>

                    <Form.Item label="Price">
                        <Input
                            name="price"
                            placeholder="$" 
                        />
                    </Form.Item>

                    <Form.Item label="Billing Rate">
                        <Input
                            name="rate"
                            placeholder="$" 
                        />
                    </Form.Item>

                </Form>
            </Modal>
        )

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

                <Button
                    className="ant-create-service"
                    onClick={() => {this.setState({modalVisible: true})}}
                >
                        Create Service
                </Button>

                {newServiceModal}

                {this.displayServices()}
          </div>
        )
    }
}