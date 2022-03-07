import {withRouter} from 'react-router';
import {useDispatch, useSelector} from 'react-redux'

import {login} from '../../redux/actions/auth';

import {Form, Input, Button} from 'antd';
import React from "react";


const Login = (props) => {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user);

    const onFinish = (values) => {
        dispatch(login({...values}, props.history));
    }


    return <>
        <h1>Login</h1>
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
                {error && <p>Something went wrong</p>}
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </>
}


export default withRouter(Login);
