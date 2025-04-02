import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import staffMembers from '../../assets/data/staffData';
import { useNavigate } from 'react-router-dom';

const AboutContainer = () => {
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/components/pages/Signup.js');
  };
  return (
    <Container className="container bg-dark text-white p-3">
      <Row className="justify-content-md-center text-center mb-5">
        <Col md={8}>
          <h1>About T.W.A.A.N</h1>
          <p className="lead my-4">
            The Total Wellness Academic & Advocacy Network (T.W.A.A.N) LLC, founded by Antoine McDonald, 
            is dedicated to fostering well-being and academic success through community and support.
            Our Young Adult Book Club provides a space for connection and growth, meeting weekly on Zoom.
          </p>
        </Col>
      </Row>

      {/* Staff Section */}
      <Row className="justify-content-center mb-5">
        <Col md={10} className="text-center">
          <h2>Meet the Team</h2>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {staffMembers.map((member) => (
          <Col key={member.id}>
            <Card className="text-center" style={{ minHeight: '400px' }}>
              <Card.Img variant="top" src={member.imageUrl} alt={member.name} style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '1rem auto 0' }} className="rounded-circle" />
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h4">{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                <Card.Text className="mt-2 flex-grow-1">
                  {member.description}
                </Card.Text>
                {/* Optionally add social links or contact info here */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Back Button */}
      <Row className="mt-5 text-center">
          <Col>
             <Button variant="secondary" size="lg" onClick={goToSignup}>
                Sign-Up!
             </Button>
          </Col>
      </Row>

    </Container>
  );
};

export default AboutContainer;