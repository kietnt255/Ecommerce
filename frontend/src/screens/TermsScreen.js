import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const TermsContainer = styled.div`
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

const TermsSection = styled(Card)`
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

const TermsScreen = () => {
  return (
    <TermsContainer>
      <PageTitle>Terms & Conditions</PageTitle>
      <LastUpdated>Last Updated: {new Date().toLocaleDateString()}</LastUpdated>

      <TermsSection>
        <Card.Body>
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using CloudKiddie's website and services, you agree to be bound by these Terms 
            and Conditions. If you disagree with any part of these terms, you may not access our services.
          </p>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Use of Services</h2>
          <h3>Eligibility</h3>
          <p>To use our services, you must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Have the legal capacity to enter into binding contracts</li>
            <li>Provide accurate and complete information</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h3>Account Registration</h3>
          <p>When creating an account, you agree to:</p>
          <ul>
            <li>Provide accurate and current information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Product Information</h2>
          <p>We strive to display our products as accurately as possible, but we do not guarantee that:</p>
          <ul>
            <li>Product colors will be exactly as shown on your device</li>
            <li>Product descriptions are completely accurate</li>
            <li>Product images are current</li>
            <li>All products are available at all times</li>
          </ul>
          <p>
            We reserve the right to modify or discontinue any product without notice. We shall not be liable 
            to you or any third party for any modification, price change, suspension, or discontinuance of products.
          </p>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Pricing and Payment</h2>
          <p>All prices are subject to change without notice. We reserve the right to:</p>
          <ul>
            <li>Modify or discontinue any product or service</li>
            <li>Refuse any order you place with us</li>
            <li>Limit or cancel quantities purchased per person, household, or order</li>
          </ul>
          <p>
            Payment must be made in full at the time of purchase. We accept various payment methods as 
            indicated during checkout. All payments are processed securely through our payment processors.
          </p>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Shipping and Delivery</h2>
          <p>Shipping terms and conditions:</p>
          <ul>
            <li>Delivery times are estimates only</li>
            <li>We are not responsible for delays beyond our control</li>
            <li>Risk of loss and title for items pass to you upon delivery</li>
            <li>Additional shipping charges may apply for international orders</li>
          </ul>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and 
            software, is the property of CloudKiddie and is protected by intellectual property laws. You may not:
          </p>
          <ul>
            <li>Use our content for commercial purposes without permission</li>
            <li>Modify or copy our materials</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer materials to another person</li>
          </ul>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Limitation of Liability</h2>
          <p>
            CloudKiddie shall not be liable for any indirect, incidental, special, consequential, or punitive 
            damages resulting from your use of or inability to use our services. Our liability is limited to 
            the amount you paid for the product or service in question.
          </p>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
            in which CloudKiddie operates, without regard to its conflict of law provisions.
          </p>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material 
            changes by posting the new Terms on this page and updating the "Last Updated" date.
          </p>
        </Card.Body>
      </TermsSection>

      <TermsSection>
        <Card.Body>
          <h2>Contact Information</h2>
          <p>
            For any questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>Email: kietngo255@gmail.com</li>
            <li>Phone: +84 (888) 266-xxx</li>
            <li>Address: 123 Cloud Street, Ho Chi Minh City, Viet Nam</li>
          </ul>
        </Card.Body>
      </TermsSection>

      <div className="text-center mt-4">
        <p className="text-muted">
          By using our services, you acknowledge that you have read and understood these Terms and Conditions 
          and agree to be bound by them.
        </p>
      </div>
    </TermsContainer>
  );
};

export default TermsScreen; 