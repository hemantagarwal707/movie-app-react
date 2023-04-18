import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter,  BsGithub } from "react-icons/bs";
import { SiLeetcode , SiGeeksforgeeks } from "react-icons/si";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                            <li>
                            <a rel="noreferrer" href="https://leetcode.com/hemantagarwal707/" target="_blank">
                                <SiLeetcode />
                            </a>
                        </li>
                        <li>
                        <a rel="noreferrer" href="https://auth.geeksforgeeks.org/user/hemantagarwal707" target="_blank">
                            <SiGeeksforgeeks />
                        </a>
                    </li>
                    <li>
                    <a rel="noreferrer" href="https://github.com/hemantagarwal707" target="_blank">
                        <BsGithub />
                    </a>
                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100076649327861" target="_blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/hemant-agarwal-b12b1822a/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://twitter.com/HemantA05441925" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                               
                              
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© Hemant Agarwal, 2023. Developed and Designed  by <a href="https://github.com/hemantagarwal707" target="_blank" rel="noreferrer">Hemant Agarwal</a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;