import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageTitle = styled.h1`
  color: #343a40;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

const PolicySection = styled(Card)`
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  
  .card-body {
    padding: 2rem;
  }
  
  h2 {
    color: #343a40;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  h3 {
    color: #343a40;
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
    font-weight: 600;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul {
    color: #6c757d;
    padding-left: 1.2rem;
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  color: #6c757d;
  margin-bottom: 2rem;
  font-style: italic;
`;

const PrivacyScreen = () => {
  return (
    <PrivacyContainer>
      <PageTitle>Privacy Policy</PageTitle>
      <LastUpdated>Last Updated: {new Date().toLocaleDateString()}</LastUpdated>

      <PolicySection>
        <Card.Body>
          <h2>Introduction</h2>
          <p>
            At CloudKiddie, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or make a purchase. 
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the site.
          </p>
        </Card.Body>
      </PolicySection>

      <PolicySection>
        <Card.Body>
          <h2>Information We Collect</h2>
          
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Create an account</li>
            <li>Make a purchase</li>
            <li>Sign up for our newsletter</li>
            <li>Contact our customer service</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time and date of visits</li>
          </ul>
        </Card.Body>
      </PolicySection>

      <PolicySection>
        <Card.Body>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your orders and payments</li>
            <li>Communicate with you about your orders</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Card.Body>
      </PolicySection>

      <PolicySection>
        <Card.Body>
          <h2>Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Payment processors for secure transactions</li>
            <li>Shipping partners to deliver your orders</li>
            <li>Law enforcement when required by law</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </Card.Body>
      </PolicySection>

      <PolicySection>
        <Card.Body>
          <h2>Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to processing of your information</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>
        </Card.Body>
      </PolicySection>

      <PolicySection>
        <Card.Body>
          <h2>Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
            over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </Card.Body>
      </PolicySection>

      <PolicySection>
        <Card.Body>
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain 
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </Card.Body>
      </PolicySection>

      <PolicySection>
        <Card.Body>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@cloudkiddie.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 E-commerce Street, Digital City, DC 12345</li>
          </ul>
        </Card.Body>
      </PolicySection>

      <div className="text-center mt-4">
        <p className="text-muted">
          This privacy policy may be updated from time to time. We will notify you of any changes by posting 
          the new privacy policy on this page and updating the "Last Updated" date.
        </p>
      </div>
    </PrivacyContainer>
  );
};

export default PrivacyScreen; 