import React, { Component } from 'react'
import { PageHeader, Table } from 'antd';

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

    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="Clients"
                />

                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}