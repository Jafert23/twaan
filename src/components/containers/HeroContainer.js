import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
// We might be able to remove this CSS import later if all styles are handled by Bootstrap
//import './styles/HeroStyles.css'; 

// Import images directly
import heroImg1 from '../../assets/images/hero-img1.png';
import heroImg2 from '../../assets/images/hero-img2.png';

const HeroContainer = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="hero-bootstrap-container p-4 p-md-5 border rounded-3 bg-dark text-white">
      <Row className="align-items-center gy-4">
        {/* Text Column 1 */}
        <Col lg={6} className="text-center text-lg-start">
          <h1 className="display-5 fw-bold lh-1 mb-3">The Total Wellness Academic & Advocacy Network (T.W.A.A.N) LLC</h1>
          <p className="lead">Founded by Antoine McDonald</p>
        </Col>

        {/* Image Column 1 */}
        <Col lg={6}>
          <Image src={heroImg1} className="d-block mx-lg-auto img-fluid rounded" alt="Hero Image 1" loading="lazy" />
        </Col>
      </Row>

      {/* Banner Row */}
      <Row className="my-4 banner-row text-center bg-secondary py-3 mx-n4 mx-md-n5">
         <Col>
           <h1 className="display-6 fw-bold">Make Reading Cool Again!</h1>
         </Col>
      </Row>

      <Row className="align-items-center gy-4 flex-column-reverse flex-lg-row">
        {/* Image Column 2 */}
        <Col lg={6}>
          <Image src={heroImg2} className="d-block mx-lg-auto img-fluid rounded" alt="Hero Image 2" loading="lazy" />
        </Col>

        {/* Text Column 2 */}
        <Col lg={6} className="text-center text-lg-start">
          <h1 className="display-5 fw-bold lh-1 mb-3">Young Adult Book Club</h1>
          <p className="lead">Meetings held weekly on Zoom</p>
        </Col>
      </Row>

      {/* Button Row */}
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary" size="lg" onClick={() => navigate('/about')}>
            Learn More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroContainer;
