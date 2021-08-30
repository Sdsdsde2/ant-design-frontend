import React, { Component } from 'react'
import { PageHeader, Table, Input, Menu, Dropdown, Button, Modal } from 'antd';
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons'

// TODO: Change out this 'data' array with client info from backend
const data = [
    {
        key: 1,
        client: 'Ant Design Title 1',
        email: 'fakeemail@gmail.com',
        phone: '(281) 555 4444',
        contact: 'John Johnson'
    },
    {
        key: 2,
        client: 'Ant Design Title 2',
        email: 'fakeemail@gmail.com',
        phone: '(281) 555 4444',
        contact: 'John Johnson'
    },
    {
        key: 3,
        client: 'Ant Design Title 3',
        email: 'fakeemail@gmail.com',
        phone: '(281) 555 4444',
        contact: 'John Johnson'
    }
];

const columns = [
    {
      title: 'CLIENT NAME',
      dataIndex: 'client',
      key: 'client',
      width: '30%',
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
      width: '20%',
    },
    {
      title: 'PHONE NUMBER',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'CONTACT PERSON',
      dataIndex: 'contact',
      key: 'contact',
    },
];

export default class Clients extends Component {
    constructor(props) {
        super();

        this.state = {
            businessVisible: false,
            personalVisible: false
        }
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1" onClick={() => {this.setState({
                    businessVisible: true
                })}}>
                    Business
                </Menu.Item>
                <Menu.Item key="2" onClick={() => {this.setState({
                    personalVisible: true
                })}}>
                    Personal
                </Menu.Item>
            </Menu>
        )

        const businessModal = (
            <Modal
                title="Create a client (Business)"
                visible={this.state.businessVisible}
                onOk={() => {this.setState({businessVisible: false})}}
            >
                <p>Hello Business Modal</p>
            </Modal>
        )

        const personalModal = (
            <Modal
                title="Create a client (Personal)"
                visible={this.state.personalVisible}
                onOk={() => {this.setState({personalVisible: false})}}
            >
                <p>Hello Personal Modal</p>
            </Modal>
        )

        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="Clients"
                />

                <Input 
                    className="ant-client-search"
                    placeholder="Search clients"
                    prefix={ <SearchOutlined /> }
                />

                <Dropdown overlay={menu}>
                    <Button className="ant-create-client">
                        Create Client <CaretDownOutlined />
                    </Button>
                </Dropdown>

                {businessModal}
                {personalModal}

                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}