import React from 'react';
import "./Counterpage.css";
import { Col, Row, Card } from 'antd';
import { ForkOutlined, UsergroupDeleteOutlined , PhoneOutlined } from '@ant-design/icons';
import aapbanner from "../../images/app-banner.jpg";


const Counterpage = () => {
    return (
        <div className='counter-section'>
            <div className="counter-cantainer">
            <div className='counter_heading'>
            <h1>Compassion & Gratitude</h1>
            <p>One Cannot Help Everyone, But Everyone Can Help Someone</p>
            </div>
            <div className="card-container">
                <Row justify='space-evenly'>
                    <Col xs={24} sm={12} md={8} lg={7} >
                        <Card
                            style={{ background: "none", border: "none" }}
                        >
                            <div className="card-title">
                                <ForkOutlined className='counter-icons' />
                                <h3>Hours of Operation</h3>
                                <span className='counter'>400</span>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={7} >
                        <Card
                            style={{ background: "none", border: "none" }}
                        >
                            <div className="card-title">
                                
                                <UsergroupDeleteOutlined className='counter-icons' />
                                <h3>Friendly Support</h3>
                                <span className='counter'>653</span>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={7} >
                        <Card
                            style={{ background: "none", border: "none" }}
                        >
                            <div className="card-title">
                                <PhoneOutlined className='counter-icons' />
                                <h3>Call us for Instant Support</h3>
                                <span className='counter'>364</span>
                            </div>
                        </Card>
                    </Col>
                </Row>
                </div>
            </div>
            <div className="app-banner">
                <img src={aapbanner} alt="App Banner" />
            </div>
        </div>
    )
}

export default Counterpage;