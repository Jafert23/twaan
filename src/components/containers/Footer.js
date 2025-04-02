import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
//import logo from '../../assets/images/TWAAN_Logo.png';
const logo = 'https://dummyimage.com/100x100/000/bcbdcc.png&text=logo';
const Footer = () => {
  return (
    <Container fluid className="footer-bootstrap-container bg-dark p-4 p-md-5 text-white">
    <Row>
      <Col>
      <Image src={logo} alt="TWAAN Logo" />
      <p>TWAAN LLC</p>
      <p>2025</p>
      <p>All Rights Reserved</p>
      </Col>
      <Col className='text-center'>
        <p>Contact Us</p>
        <p>Email: info@twaan.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </Col>
      <Col className='text-end'>
        <p>Follow Us</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </Col>
    </Row>
  </Container>
  );

}

export default Footer;