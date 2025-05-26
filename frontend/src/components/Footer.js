import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #343a40;
  color: #fff;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
`;

const FooterTitle = styled.h5`
  color: #fff;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const FooterLink = styled(Link)`
  color: #adb5bd;
  text-decoration: none;
  display: block;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: #fff;
    transform: translateX(5px);
  }
`;

const SocialLink = styled.a`
  color: #adb5bd;
  font-size: 1.25rem;
  margin-right: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: center;
  color: #adb5bd;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <FooterTitle>About Us</FooterTitle>
            <p style={{ color: '#adb5bd', fontSize: '0.95rem' }}>
              We provide innovative e-commerce solutions to help businesses grow and succeed in the digital marketplace.
            </p>
            <div className="mt-3">
              <SocialLink href="https://github.com/kietnt255" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/kietngo255/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="mailto:kietngo255@gmail.com">
                <FaEnvelope />
              </SocialLink>
            </div>
          </Col>

          <Col md={3} className="mb-4">
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/products">Products</FooterLink>
            <FooterLink to="/categories">Categories</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </Col>

          <Col md={3} className="mb-4">
            <FooterTitle>Customer Service</FooterTitle>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/shipping">Shipping Information</FooterLink>
            <FooterLink to="/returns">Returns & Refunds</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms & Conditions</FooterLink>
          </Col>

          <Col md={3} className="mb-4">
            <FooterTitle>Newsletter</FooterTitle>
            <p style={{ color: '#adb5bd', fontSize: '0.95rem' }}>
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '0.95rem',
                  }}
                />
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  style={{ fontSize: '0.95rem' }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>

        <FooterBottom>
          <p className="mb-0">
            © {currentYear} Your E-commerce Store. All rights reserved. Made with{' '}
            <FaHeart style={{ color: '#dc3545', fontSize: '0.9rem' }} /> by{' '}
            <a
              href="https://cloudkiddie.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              CloudKiddie
            </a>
          </p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
