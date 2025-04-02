import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { statistics } from '../../assets/data/statisticsData'; // Updated import path
import { useRotatingStatistics } from '../../hooks/useRotatingStatistics'; // Import custom hook
import './styles/HeroStyles.css'; 

// Import images directly
//TODO: Re-add below images after debugging

//import heroImg1 from '../../assets/images/hero-img1.png';
//import heroImg2 from '../../assets/images/hero-img2.png';
const heroImg1 = 'https://dummyimage.com/600x600/000/bcbdcc.png&text=Image+Here';
const heroImg2 = 'https://dummyimage.com/600x600/000/bcbdcc.png&text=Image+Here';

const HeroContainer = () => {
  const navigate = useNavigate();
  // Get both statistic and animation class from the hook
  // Pass animation duration (e.g., 500ms)
  const [currentStat, animationClass] = useRotatingStatistics(statistics, 5000, 500);

  return (
    <Container fluid className="hero-bootstrap-container p-4 p-md-5 text-white">
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

      {/* Statistic Row - Updated Structure */}
      <Row className="justify-content-center my-4"> {/* Center the card column */}
        <Col xs={11} md={10} lg={8}> {/* Adjust width as needed (lg=8 is ~66%, use lg=10 for ~83%)*/}
          <Card bg="dark" text="white" className="statistic-card"> {/* Optional: Add custom class for specific card styles */}
            {/* Added Card.Body with overflow hidden for animation */}
            <Card.Body className="statistic-card-body">
              {/* Apply animation class here */}
              <h1 className={`text-center ${animationClass}`}>
                {currentStat || '\u00A0'} {/* Display stat or non-breaking space to maintain height */}
              </h1>
            </Card.Body>
          </Card>
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
        {/* Banner Row */}
    <Row className="my-4 banner-row text-center py-3 mx-n4 mx-md-n5">
        <Col>
        <h1 className="display-6 fw-bold">Make Reading Cool Again!</h1>
        </Col>
    </Row>

    {/* Button Row */}
    <Row className="mt-4">
    <div class="d-grid gap-2">
        <button class="btn btn-dark" type="button" onClick={() => navigate('/components/pages/About.js')}>
            Learn More
        </button>
    </div>
    </Row>
    </Container>
  );
};

export default HeroContainer;
