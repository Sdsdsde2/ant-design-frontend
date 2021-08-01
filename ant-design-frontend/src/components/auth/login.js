import React, { Component } from 'react'
import axios from 'axios';

import { Form, Input, Button } from 'antd';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post("http://localhost:3000/sessions", {
            username: this.state.username,
            password: this.state.password
        },
        {withCredentials: true})
        .then(resp => {if (resp.data.logged_in) this.props.handleSuccessfulAuth(resp.data)})
        .catch(error => console.log("Registration Errors:", error))
    }

    render() {
        return (
            <div>
                <Form
                    name="basic"
                    layout="vertical"
                    className="ant-form"
                    onFinish={this.handleSubmit}
                >

                    <Form.Item label="Username">
                        <Input
                            name="username"
                            placeholder="Username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                        />
                    </Form.Item>

                    <Form.Item label="Password">
                        <Input 
                            name="password"
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Sign in</Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}
