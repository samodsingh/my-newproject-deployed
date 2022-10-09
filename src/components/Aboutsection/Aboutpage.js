import React from 'react';
import "./Aboutpage.css";
import { Col, Row } from 'antd';
import {BankOutlined,LockOutlined} from "@ant-design/icons";
import aboutimage from "../../images/about_feat_bg.jpg";
import aboutbottomimage from "../../images/about_bottom_img.jpg";


const Aboutpage = () => {
    return (
        <div className='section-about'>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <img src={aboutimage} alt="About image"  className='aboutimage_style'/>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <div className='about-us-info'>
                       <h1>
                        Our<i class="text-curly">Legacy</i><br />
                       & About Avyaja !
                        </h1> 
                        <p>
                            <br />
                            
                            “Avyaja” implies “Truth, Transparent  Trust.” with core value of Mutual respect, Gratitude, Compassion, Honour, Candor  Integrity. Avyaja team is dedicated to assist the vulnerable segment of society and assist each citizen to lead a balanced and dignified life.
                                <br /><br />
                        </p>
                        <p className='about-btn'><a href="#" className='btn-theme '>Explore More </a></p>
                  </div>
                </Col>
            </Row>
            {/* About top End-------- */}
            {/* OUR VISION & MISSION Start------------ */}
            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={11} >
                    <img src={aboutbottomimage} alt="About image"  className='aboutimage_style'/>
                </Col>
                <Col xs={24} sm={24} md={12} lg={11} >
                <div className='about-us-info-bottom'>
                       <h1>
                           OUR VISION & MISSION
                        </h1> 
                        <p>                                                       
                            We provide friendly and professional team of care coordinators work hard to ensure they find the right care giver for each client.                                <br /><br />
                        </p>
                       <ul className='service-lists'>
                        <li>
                            <div className='service-item'>
                                <div className='service-icon1'>
                                    <BankOutlined />
                                </div>
                                <div className="service-text">
                                    <span>Our Vision</span>
                                    <p>“To create a dignified and Humane society through Compassion and Gratitude!”</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='service-item'>
                                <div className='service-icon2'>
                                <LockOutlined />                                </div>
                                <div className="service-text">
                                    <span>Our Mission</span>
                                    <p>“To enrich 1 million lives through Compassion helping hand by the year 2030.”</p>
                                </div>
                            </div>
                        </li>
                       </ul>
                        <div className="out_mision"></div>
                  </div>
                </Col>

            </Row>

        </div>
    )
}

export default Aboutpage;