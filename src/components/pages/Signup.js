import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Signup() {
  return (
    <Container className="container bg-white text-dark p-3">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Sign Up</h1>
          <p className="text-center mb-4">
            Are you interested in joining the TWAAN Book Club? <br/> To participate please complete and submit the form below.
          </p>
          <Form
            action="https://formsubmit.co/jafert23@gmail.com"
            method="POST"
            className="twaan-signup-form"
          >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text" name="lastname" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={4} controlId="formGridAge">
                <Form.Label>Age:</Form.Label>
                <Form.Control type="number" name="age" required />
              </Form.Group>

              <Form.Group as={Col} md={8} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridContactMethod">
                <Form.Label>Preferred method of contact:</Form.Label>
                <Form.Select name="Preferred method of contact" required>
                  <option value="">Select an option...</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Text">Text</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHowHeard">
                <Form.Label>How did you hear about us?</Form.Label>
                <Form.Select name="How did you hear about us?" required>
                  <option value="">Select an option...</option>
                  <option value="Friend">Friend</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <h4 className="mt-4 mb-3">Parent/Guardian Information</h4>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridGuardianName">
                <Form.Label>Parent/Guardian name:</Form.Label>
                <Form.Control type="text" name="Parent/Guardian name" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="formGridGuardianContact">
                <Form.Label>Parent/Guardian Contact:</Form.Label>
                <Form.Control type="tel" name="Parent/Guardian Contact" required />
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="formGridGuardianEmail">
                <Form.Label>Parent/Guardian Email:</Form.Label>
                <Form.Control type="email" name="Parent/Guardian Email" required />
              </Form.Group>
            </Row>

            <input type="hidden" name="_subject" value="TWAAN Book Club Signup" />
            <input type="hidden" name="_template" value="modern" />
            <input type="hidden" name="_next" value="https://creativeelliot.com" />
            <input type="hidden" name="_autoresponse" value="Thank you for signing up for the TWAAN Book Club! We will contact you soon." />
            <input type="hidden" name="_format" value="plaintext" />

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup; 