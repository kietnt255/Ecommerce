import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styled from 'styled-components';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ContactCard = styled(Card)`
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  
  .card-body {
    padding: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    color: #343a40;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  h5 {
    margin: 0;
    color: #343a40;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: #6c757d;
  }
`;

const StyledForm = styled(Form)`
  .form-label {
    color: #495057;
    font-weight: 500;
  }

  .form-control {
    border-color: #dee2e6;
    &:focus {
      border-color: #343a40;
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.15);
    }
  }

  .btn-primary {
    background: #343a40;
    border: none;
    padding: 0.8rem 2rem;
    &:hover {
      background: #23272b;
    }
  }
`;

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Here you would typically make an API call to send the message
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContainer>
      <h1 className="mb-4">Contact Us</h1>
      
      <Row>
        <Col md={4}>
          <ContactCard>
            <Card.Body>
              <h4 className="mb-4">Get in Touch</h4>
              
              <ContactInfo>
                <FaEnvelope />
                <div>
                  <h5>Email</h5>
                  <p>kietngo255@gmail.com</p>
                </div>
              </ContactInfo>
              
              <ContactInfo>
                <FaPhone />
                <div>
                  <h5>Phone</h5>
                  <p>+84 (888) 266-xxx</p>
                </div>
              </ContactInfo>
              
              <ContactInfo>
                <FaMapMarkerAlt />
                <div>
                  <h5>Address</h5>
                  <p>123 Cloud Street<br />Ho Chi Minh City, Viet Nam</p>
                </div>
              </ContactInfo>
              
              <ContactInfo>
                <FaClock />
                <div>
                  <h5>Business Hours</h5>
                  <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                </div>
              </ContactInfo>
            </Card.Body>
          </ContactCard>
        </Col>
        
        <Col md={8}>
          <ContactCard>
            <Card.Body>
              <h4 className="mb-4">Send us a Message</h4>
              
              {success && (
                <Message variant="success">
                  Thank you for your message! We'll get back to you soon.
                </Message>
              )}
              
              {error && <Message variant="danger">{error}</Message>}
              
              <StyledForm onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  className="mt-3"
                >
                  {loading ? <Loader /> : 'Send Message'}
                </Button>
              </StyledForm>
            </Card.Body>
          </ContactCard>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default ContactScreen; 