import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export const Home = () => {
    let his = useHistory()

    const onFinish = async (values) => {
        console.log('Success:', values);
        let d = (await axios.get('/backend/validate_login/?user=' + values['username'])).data;
        console.log(d)
        if (d == "valid")
            his.push('/success_login')

    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true }]}
            >
                <Input style={{ width: "300px" }} />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item  >
        </Form>

    )
}
