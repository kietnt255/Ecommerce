import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaRocket, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: #343a40;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;
`;

const FeatureCard = styled(Card)`
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .card-body {
    padding: 2rem;
    text-align: center;
  }
  
  svg {
    color: #343a40;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  h4 {
    color: #343a40;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 0;
  }
`;

const TeamMemberCard = styled(Card)`
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  overflow: hidden;
  
  .card-img-top {
    height: 250px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 1.5rem;
    text-align: center;
  }
  
  h4 {
    color: #343a40;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  .position {
    color: #6c757d;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 0;
  }
`;

const AboutScreen = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above all else, ensuring a personalized shopping experience.'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'Our efficient logistics network ensures quick and reliable delivery of your orders to your doorstep.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Shopping',
      description: 'Your security is our priority. We use advanced encryption to protect your personal and payment information.'
    },
    {
      icon: <FaHandshake />,
      title: 'Quality Guarantee',
      description: 'We carefully select our products to ensure the highest quality standards for our customers.'
    }
  ];

  const teamMembers = [
    {
      name: 'Ngo Tuan Kiet',
      position: 'CEO & Founder',
      image: 'https://avatars.githubusercontent.com/u/91515708?v=4',
      description: 'With over 15 years of experience in e-commerce, John leads our company with vision and innovation.'
    },
    {
      name: 'Trinh Tran Phuong Tuan',
      position: 'Head of Operations',
      image: 'https://anhnail.vn/wp-content/uploads/2025/01/hinh-jack-j97-meme-19.webp',
      description: 'Jane ensures smooth operations and excellent customer service across all our platforms.'
    },
    {
      name: 'Max Verstappen',
      position: 'Technical Director',
      image: 'https://i.imgur.com/6U1isEn.jpeg',
      description: 'Mike oversees our technical infrastructure and ensures a seamless shopping experience.'
    }
  ];

  return (
    <AboutContainer>
      <Section>
        <SectionTitle>About CloudKiddie</SectionTitle>
        <Row className="mb-4">
          <Col md={12}>
            <p className="lead text-center mb-4">
              Welcome to CloudKiddie, your trusted destination for quality products and exceptional shopping experience.
              Founded in 2023, we've been committed to providing our customers with the best products and service.
            </p>
            <p className="text-center text-muted">
              Our mission is to make online shopping simple, secure, and enjoyable for everyone.
              We believe in building long-lasting relationships with our customers through transparency,
              quality products, and outstanding customer service.
            </p>
          </Col>
        </Row>
      </Section>

      <Section>
        <SectionTitle>Why Choose Us</SectionTitle>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <FeatureCard>
                <Card.Body>
                  {feature.icon}
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </Card.Body>
              </FeatureCard>
            </Col>
          ))}
        </Row>
      </Section>

      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4}>
              <TeamMemberCard>
                <Card.Img variant="top" src={member.image} alt={member.name} />
                <Card.Body>
                  <h4>{member.name}</h4>
                  <div className="position">{member.position}</div>
                  <p>{member.description}</p>
                </Card.Body>
              </TeamMemberCard>
            </Col>
          ))}
        </Row>
      </Section>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <Row>
          <Col md={12}>
            <div className="text-center">
              <p className="lead mb-4">
                At CloudKiddie, we are guided by our core values:
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">✨ Integrity in all our business practices</li>
                <li className="mb-3">💡 Innovation in our approach to e-commerce</li>
                <li className="mb-3">🤝 Customer satisfaction as our top priority</li>
                <li className="mb-3">🌱 Commitment to sustainable business practices</li>
                <li className="mb-3">👥 Building a strong community of satisfied customers</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Section>
    </AboutContainer>
  );
};

export default AboutScreen; 