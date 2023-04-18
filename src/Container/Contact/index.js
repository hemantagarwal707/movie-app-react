import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter,  BsGithub } from "react-icons/bs";
import { SiLeetcode , SiGeeksforgeeks } from "react-icons/si";
const  ContactContainer = ()=>{
    const myData = [
       
        {name:'Leetcode', link:'https://leetcode.com/hemantagarwal707/', text:'Follow to my Letcode account.'},
        {name:'GeeksforGeeks', link:'https://auth.geeksforgeeks.org/user/hemantagarwal707', text:'Follow to my gfg account.'},
          {name:'GitHub', link:'https://github.com/hemantagarwal707', text:'Follow to my github account.'},
          {name:'Facebook', link:'https://www.facebook.com/profile.php?id=100076649327861', text:'Follow to my facebook.'},
          {name:'Linkedin', link:'https://www.linkedin.com/in/hemant-agarwal-b12b1822a/', text:'Follow to my linkedin.'},
          {name:'Twitter', link:'https://twitter.com/HemantA05441925', text:'Follow to my twitter.'}
       
      
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
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
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;