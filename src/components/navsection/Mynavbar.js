import React from 'react';
import "./Mynavbar.css";
import {Drawer } from 'antd';
import { useState } from 'react';
import {
    PhoneOutlined, FacebookOutlined,
    TwitterOutlined, MenuOutlined,
    InstagramOutlined,
    LinkedinOutlined, YoutubeOutlined
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import logo from "../../images/logo.png";


const Mynavbar = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='container'>
            <div className="top-nav">
                <Row>
                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 14, offset: 2 }}>
                        <ul className='top-bar-info'>
                            <li className='top-bar-phone'> <PhoneOutlined /> +91 900 900 3963 |</li>
                            <li className='top-bar-hour'>Service Hours :  8:00 AM - 8:00 PM IST</li>
                        </ul>
                    </Col>
                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }}>
                        <ul className='top-bar-icons'>
                            <li className='icon'><a href="/"><FacebookOutlined /></a></li>
                            <li className='icon'><a href="/"><TwitterOutlined /></a></li>
                            <li className='icon'><a href="/"><InstagramOutlined /></a></li>
                            <li className='icon'><a href="/"><LinkedinOutlined /></a></li>
                            <li className='icon'><a href="/"><YoutubeOutlined /></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="bottom-nav">
                <img src={logo} alt="MyLogo" />
                <div className="drawar">
                    <MenuOutlined onClick={showDrawer} />
                    <Drawer title="Basic Drawer" placement="right" width={200} onClose={onClose} open={open}>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Contact us</p>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default Mynavbar;