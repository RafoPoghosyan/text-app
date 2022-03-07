import React from 'react';
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router';
import { register } from '../../redux/actions/auth';
import {Button, Form, Input} from "antd";

export default withRouter((props) => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(register({...values}, props.history));
    }


    return <>
        <h1>Registration</h1>
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 4}}
            onFinish={onFinish}
            autoComplete="off"
        >

            <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    </>
})