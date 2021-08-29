import React, { Component } from 'react'
import { PageHeader, Table, Input, Menu, Dropdown, Button, Modal } from 'antd';
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons'

const menu = (
    <Menu>
        <Menu.Item key="1">
            Business
        </Menu.Item>
        <Menu.Item key="2">
            Personal
        </Menu.Item>
    </Menu>
)

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

const businessModal = (
    <Modal
        title="Create a client (Business)"
    >
        <p>Hello Modal</p>
    </Modal>
)

const personalModal = (
    <Modal
        title="Create a client (Personal)"
    >
        <p>Hello Modal</p>
    </Modal>
)

export default class Clients extends Component {
    constructor(props) {
        super();

    }

    render() {
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
                    onSearch={console.log("searching")}
                />

                <Dropdown overlay={menu}>
                    <Button className="ant-create-client">
                        Create Client <CaretDownOutlined />
                    </Button>
                </Dropdown>

                businessModal

                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}