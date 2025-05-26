import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaUndo, FaBox, FaMoneyBillWave, FaExclamationTriangle } from 'react-icons/fa';
import styled from 'styled-components';

const ReturnsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageTitle = styled.h1`
  color: #343a40;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

const PolicyCard = styled(Card)`
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 100%;
  margin-bottom: 2rem;
  
  .card-body {
    padding: 2rem;
  }
  
  svg {
    color: #343a40;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #343a40;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 0;
  }
`;

const ProcessStep = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  .step-number {
    background: #343a40;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .step-content {
    h4 {
      color: #343a40;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    p {
      color: #6c757d;
      margin-bottom: 0;
    }
  }
`;

const ReturnsScreen = () => {
  const policies = [
    {
      icon: <FaUndo />,
      title: '30-Day Return Policy',
      description: 'We offer a 30-day return window for most items. Products must be unused and in their original packaging with all tags and accessories included.'
    },
    {
      icon: <FaBox />,
      title: 'Return Shipping',
      description: 'Return shipping is free for items that arrived damaged or defective. For other returns, shipping costs may be deducted from your refund.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Refund Process',
      description: 'Refunds are processed within 5-7 business days after we receive the returned item. The refund will be issued to your original payment method.'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Exceptions',
      description: 'Some items are not eligible for returns, including personalized products, digital items, and items marked as final sale. Please check product descriptions for details.'
    }
  ];

  const returnSteps = [
    {
      title: 'Initiate Return',
      description: 'Log into your account, go to your order history, and select the item(s) you wish to return. Click "Return Item" and follow the prompts.'
    },
    {
      title: 'Package Item',
      description: 'Carefully package the item in its original packaging with all accessories and documentation. Include the return label and any required forms.'
    },
    {
      title: 'Ship Item',
      description: 'Drop off the package at your nearest shipping location or schedule a pickup. Keep the tracking number for your records.'
    },
    {
      title: 'Track Return',
      description: 'Monitor your return status through your account. You\'ll receive email notifications when we receive your return and process your refund.'
    }
  ];

  return (
    <ReturnsContainer>
      <PageTitle>Returns & Refunds Policy</PageTitle>
      
      <Row className="mb-5">
        {policies.map((policy, index) => (
          <Col key={index} md={6} lg={3}>
            <PolicyCard>
              <Card.Body>
                {policy.icon}
                <h3>{policy.title}</h3>
                <p>{policy.description}</p>
              </Card.Body>
            </PolicyCard>
          </Col>
        ))}
      </Row>

      <Card className="mb-5" style={{ border: 'none', boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <Card.Body style={{ padding: '2rem' }}>
          <h2 className="mb-4" style={{ color: '#343a40', fontWeight: '600' }}>Return Process</h2>
          {returnSteps.map((step, index) => (
            <ProcessStep key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </ProcessStep>
          ))}
        </Card.Body>
      </Card>

      <Card style={{ border: 'none', boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <Card.Body style={{ padding: '2rem' }}>
          <h2 className="mb-4" style={{ color: '#343a40', fontWeight: '600' }}>Important Notes</h2>
          <ul className="text-muted" style={{ paddingLeft: '1.2rem' }}>
            <li className="mb-2">All returned items must be in their original condition and packaging.</li>
            <li className="mb-2">Return shipping labels must be used within 14 days of issuance.</li>
            <li className="mb-2">Refunds may take 5-7 business days to appear in your account after processing.</li>
            <li className="mb-2">Original shipping costs are non-refundable unless the item was defective or damaged.</li>
            <li className="mb-2">For international returns, please contact our customer service team for assistance.</li>
          </ul>
        </Card.Body>
      </Card>

      <div className="text-center mt-5">
        <p className="text-muted">
          Need help with your return?{' '}
          <a href="/contact" style={{ color: '#343a40', textDecoration: 'none' }}>
            Contact our support team
          </a>
        </p>
      </div>
    </ReturnsContainer>
  );
};

export default ReturnsScreen; 