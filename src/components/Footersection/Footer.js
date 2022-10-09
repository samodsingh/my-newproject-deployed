import React from 'react';
import { Col, Row } from 'antd';
import "./Footer.css";

import {
    MailOutlined,FieldTimeOutlined,HeatMapOutlined
} from '@ant-design/icons';

const Footer = () => {
    return (
        <div className='footerSection'>
            <div className='container-style'>
                <Row>
                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset:  6}}>
                        <div className='text-style-footer'>
                        <h1>About Avyaja</h1>
                            <p>Avyaja is working towards the inclusion of impaired lives in mainstream society through this social integration initiative.</p>
                            <p>
                            <MailOutlined className='icon-style' />  <a href="mailto:contact@avyaja.org">contact@avyaja.org</a>
                            </p>
                            <p> <HeatMapOutlined className='icon-style' />  #60, Shiva Sai Nagar, Beeramguda, Ameenpur, Dist- Sangareddy, Telangana, PIN 502032</p>
                            <p> <FieldTimeOutlined className='icon-style' />  Mon - Sun, 9:00 AM – 5:00 PM</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <hr />
             <div className='footer-bottum'>
                <h3 >©  Copyright 2021 Avyaja Foundation All rights reserved.</h3>
             </div>
        </div>
    )
}

export default Footer;