import React from 'react';
import "./Formsection.css";
import appointementArrow from "../../images/appointment_arrow.png";
import {
    Button,
    Col,
    Form,
    Input,
    Card,
    Row,
    Select, DatePicker
} from 'antd';
import imgplaystote from "../../images/imgplaystore.png";

const { Option } = Select;
const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};


const Formsection = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div id='Section1'>
            <Row>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                    <div className="section1-left-text">
                        <h1>
                            <strong className='text-primary-color'>Care....Love</strong> <br />
                            ....Consider.... <br />
                            Happiness at One Click !
                            <br />
                        </h1>
                        <p>
                            Avyaja team is dedicated to assist the vulnerable segment of society
                        </p>
                        <img src={appointementArrow} alt="Appointment Arrow" className='appointment_arrow_style' />
                    </div>
                </Col>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 11, offset: 0 }}>
                    <div className='myform_style'>
                        <Card className="card-style">
                            <h1>Book Your Assistance</h1>
                            <Form
                                size="large"                                
                                {...layout}
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Row gutter={[16, 16]}>
                                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }}>

                                        <Form.Item
                                            name="fullname"
                                            label={<label style={{ color: "whitesmoke", fontSize: "20px", fontWeight: "700" }}>Your Name</label>}
                                            style={{ color: "red" }}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your full name!",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Full Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                                        <Form.Item
                                            name="email"
                                            label={<label style={{ color: "whitesmoke", fontSize: "20px", fontWeight: "700" }}>Your Email</label>}
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your E-mail!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                                        <Form.Item
                                            name="phone"
                                            label={<label style={{ color: "whitesmoke", fontSize: "20px", fontWeight: "700" }}>Your Phone</label>}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your phone number!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                addonBefore={prefixSelector}
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                                        <Form.Item
                                            name="service"
                                            label={<label style={{ color: "whitesmoke", fontSize: "20px", fontWeight: "700" }}>Service</label>}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your Service",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Service" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                                        <Form.Item name="date-time-picker"
                                            label={<label style={{ color: "whitesmoke", fontSize: "20px", fontWeight: "700" }}>Date & Time</label>}
                                            {...config}>
                                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }}>
                                        <Form.Item name={['message']}
                                            label={<label style={{ color: "whitesmoke", fontSize: "20px", fontWeight: "700" }}>Your Message</label>}
                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item>                                                                 
                                    <Button className='btn-theme-invert' htmlType="submit"><a href="/">Submit</a></Button>
                                </Form.Item>
                                <img className='imgplaystore-style' src={imgplaystote} alt="Playstore Image" />
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Formsection