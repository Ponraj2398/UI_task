import React from "react";
import img1 from './images/Group34165.png'
import searchimg from './images/search.png'
import img4 from './images/india.png'
import img7 from './images/Vector1.png'
import img8 from './images/link5.png'
import img9 from './images/link4.png'
import img10 from './images/Maskgroup.png'
import img11 from './images/rahul.png'
import img12 from './images/Group18896.png'
import img13 from './images/Group18897.png'
import img14 from './images/flowerimg.png'
import img15 from './images/man.png'
import img16 from './images/hall.png'
import img17 from './images/Group19039.png'
import l1 from './images/l1.png'
import l2 from './images/l2.png'
import l3 from './images/l3.png'
import l4 from './images/l4.png'
import grp from './images/Group1019.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './App.css';
const UI = () => {
    return (
        <div>
            <div style={{ width: '1450px', height: '388px' }}>
                <div><img src={img1} width={'970px'} height={'250px'} style={{ left: '240px' }} alt="Not found" /></div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-start" style={{ left: '20px', position: 'relative' }}>
                        <img src={searchimg} className="searchimg" alt="NA" />&nbsp;
                        <span className="img3">Search here...</span>
                    </div>
                    <img src={img4} className="img4" alt="NA" />
                    <div>
                    <Button variant="danger" className="subscribe-btn">SUBSCRIBE</Button>&nbsp;
                    <Button variant="outline-dark" className="subscribe-btn sign">SIGN IN</Button>
                    </div>
                    
                    {/* <img src={img5} alt="NA" className="img5" /> */}
                </div>
                <hr />
                <div className="topbar d-flex justify-content-between align-items-center">
                    <div style={{ left: '50px', position: 'relative' }}><i class="bi bi-list text-dark menu-icon"></i></div>
                    {/* <div className="topbar-items"> */}
                    <ul className="topbar-ul">
                        <li className="menu-list"><a href="/" className="menu-list active">Home</a></li>
                        <li className="menu-list"><a href="/" className="menu-list">Categories</a></li>
                        <li className="menu-list"><a href="/" className="menu-list">IR Prime</a></li>
                        <li className="menu-list"><a href="/" className="menu-list">Events</a></li>
                        <li className="menu-list"><a href="/" className="menu-list">Bookstore</a></li>
                        <li className="menu-list"><a href="/" className="menu-list">Newsletter</a></li>
                        <li className="menu-list"><a href="/" className="menu-list">Video</a></li>
                    </ul>
                    {/* </div> */}
                    <div><img src={img7} className="img7" alt="NA" /><span className="date">Friday, 30 June 2023</span></div>
                </div>
                <div className="type">
                    <ul className="type-ul">
                        <li className="type-list" style={{ listStyleType: 'none' }}>Fashion & Lifestyle</li>
                        <li className="type-list">Beauty & Wellness</li>
                        <li className="type-list">Food & Beverage</li>
                        <li className="type-list">Consumer Durables & IT</li>
                        <li className="type-list">Entertainment</li>
                        <li className="type-list">Home Decor & Furnishing</li>
                        <li className="type-list">Specialty Retail</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <Row>
                    <Col md={4} className="card-col">
                        <img src={img8} alt="NA" className="img8" />
                        <span className="card-header">HOTSPOTS</span>
                        <span className="card-text">Luxury hotspots: 5 most expensive high streets in the...</span>
                    </Col>
                    <Col md={4} className="card-col">
                        <img src={img9} alt="NA" className="img9" />
                        <span className="card-header">AI</span>
                        <span className="card-text">5 ways to leverage the power of ChatGPT in retail</span>
                    </Col>
                    <Col md={4} className="card-col">
                        <img src={img10} alt="NA" className="img10" />
                        <span className="card-header">SHIPPING</span>
                        <span className="card-text">Reliance to open 250 Azorte stores in 2-3 years</span>
                    </Col>
                </Row>
            </div>

            <div className="news">
                {/* <Container> */}
                <Row>
                    <Col xs={8}>
                        <img src={img11} alt="NA" className="img11" />
                        <div style={{ top: '40px', position: 'relative' }}>
                            <Row style={{ gap: '10px' }}>
                                <Col xs={12}>
                                    <img src={img12} alt="NA" className="img12" />
                                    <span className="news-header">Select Citywalk</span><br />
                                    <span className="news-headline">Wow! Momo Foods enters Bhopal with Wow! </span>
                                    <span className="news-hashtag"># Citywalk #reel stories podcast</span>
                                </Col>

                                <Col xs={12}>
                                    <img src={img13} alt="NA" className="img13" />
                                    <span className="news-header">Food & Beverage</span><br />
                                    <span className="news-headline">KFC opens another outlet in Punjab KFC opens another outlet in Punjab</span>
                                    <span className="news-hashtag"># Beverage #reel stories podcast</span>
                                </Col>
                                <Col xs={12}>
                                    <img src={img14} alt="NA" className="img14" />
                                    <span className="news-header">Select Citywalk</span><br />
                                    <span className="news-headline">FNP (Ferns N Petals) appoints Ashish Goel</span>
                                    <span className="news-hashtag"># Citywalk #reel stories podcast</span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <h3 className="head">Latest News</h3>
                        <img src={img15} className="img15" alt="NA" />
                        <br />
                        <p className="head-text">Unwrapping the Archies’ reinvention plan</p>
                        <img src={img16} alt="NA" className="img16" />
                        <br />
                        <p className="head-text">How AI is enhancing stores, How AI is enhancing stores</p>
                        <br />
                        <span className="head-text1">Croma opens 58 outlets in 6, Croma retails more than 16,000</span><br /><br />
                        <span className="head-text2">These companies created a lot of hype when they listed on the...</span><br /><br />
                        <span className="head-text1">Select Citywalk opens 4 new stores in June</span><br /><br />
                        <span className="head-text2">These companies created a lot of hype when they listed on the...</span>
                    </Col>
                </Row>
                {/* </Container> */}
            </div>
            <div className="web-specials">
                <h3 className="web-text">Web Specials</h3>
                <Row>
                    <Col md={4}>
                        <img src={img11} alt="NA" className="web-img" />
                    </Col>
                    <Col md={4}>
                        <div className="second-web-col">
                            <ul>
                                <li className="second-web-text">Cinema industry welcomes lowering GST rates</li>
                                <li className="second-web-text">Patanjali Ayurved to sell 7% stake in Patanjali</li>
                                <li className="second-web-text">Select Citywalk opens 4 new stores in June</li>
                                <li className="second-web-text">Govt imposes import restrictions on certain gold</li>
                                <li className="second-web-text">Joom Marketplace offers a global window for sellers</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <p>- Advertisement -</p>
                        <img src={img17} alt="NA" className="img17" />
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <ul className="d-flex justify-content-around">
                            <li className="second-web-text1">B2B managed marketplace The Yarn</li>
                            <li className="second-web-text1">Sequoia Capital exits Go Fashion</li>
                            <li className="second-web-text1">B2B managed marketplace The Yarn</li>
                            <li className="second-web-text1">Sequoia Capital exits Go Fashion</li>
                        </ul>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </div>

            <div className="img-card">
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <img src={img14} alt="NA" className="img14" />
                                <p>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={l1} alt="NA" className="img14" />
                                <p>DLF creating new retail space in Delhi for France’s Galeries Lafayette</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={l4} alt="NA" className="img14" />
                                <p>PE firm Carlyle offloads entire, Carlyle through its special-purpose </p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={l3} alt="NA" className="img14" />
                                <p>How AI is enhancing stores, How AI is enhancing stores</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={l2} alt="NA" className="img14" />
                                <p>Shilpa Shetty Kundra invests, Kisankonnect is at Rs 120 crore</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="trending">
                <h2 className="trending-text">Trending</h2>
                <div className="trending-list">
                    <span className="trending-types">Rahul Gandhi In Manipur</span>
                    <span className="trending-types">Meta</span>
                    <span className="trending-types">E-commerce</span>
                    <span className="trending-types">Fashion</span>
                    <span className="trending-types">Live Cricket Score</span>
                    <span className="trending-types">Adipurush</span>
                    <span className="trending-types">Sushant Singh Rajputdeath case</span>
                    <span className="trending-types">Myntra launches </span>
                    <span className="trending-types">E-commerce</span>
                    <span className="trending-types">Live Cricket Score</span>
                    <span><img src={grp} alt="NA" /></span>
                </div>

            </div>
        </div>
    )
}
export default UI;