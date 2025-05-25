import React, { useState } from 'react';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';
import Message from './Message';

const ChatIcon = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #007bff;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const ChatModal = styled(Modal)`
  .modal-content {
    border-radius: 15px;
  }
`;

const ChatHeader = styled(Modal.Header)`
  background-color: #007bff;
  color: white;
  border-radius: 15px 15px 0 0;
  
  .close {
    color: white;
  }
`;

const ChatBody = styled(Modal.Body)`
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  background-color: #f8f9fa;
`;

const MessageBubble = styled.div`
  margin-bottom: 15px;
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 15px;
  ${props => props.isUser ? `
    margin-left: auto;
    background-color: #007bff;
    color: white;
  ` : `
    margin-right: auto;
    background-color: #e9ecef;
    color: black;
  `}
`;

const ChatFooter = styled(Modal.Footer)`
  border-top: none;
  padding: 15px;
`;

const ChatBot = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputMessage, isUser: true }]);
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post('/api/chat/', {
        message: inputMessage
      });

      setMessages(prev => [...prev, { 
        text: data.response,
        isUser: false 
      }]);
    } catch (error) {
      setError(error.response?.data?.message || 'Error getting response from AI');
      setMessages(prev => [...prev, { 
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        isUser: false 
      }]);
    } finally {
      setLoading(false);
      setInputMessage('');
    }
  };

  return (
    <>
      <ChatIcon onClick={handleShow}>
        <FaRobot size={24} color="white" />
      </ChatIcon>

      <ChatModal show={show} onHide={handleClose} centered>
        <ChatHeader closeButton>
          <Modal.Title>
            <FaRobot className="me-2" />
            AI Assistant
          </Modal.Title>
        </ChatHeader>
        
        <ChatBody>
          {error && <Message variant="danger">{error}</Message>}
          {messages.map((message, index) => (
            <MessageBubble key={index} isUser={message.isUser}>
              {message.text}
            </MessageBubble>
          ))}
          {loading && (
            <MessageBubble isUser={false}>
              <div className="d-flex align-items-center">
                <div className="spinner-border spinner-border-sm me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                Thinking...
              </div>
            </MessageBubble>
          )}
        </ChatBody>

        <ChatFooter>
          <Form onSubmit={handleSendMessage} className="w-100">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={loading}
              />
              <Button type="submit" variant="primary" disabled={loading}>
                <FaPaperPlane />
              </Button>
            </InputGroup>
          </Form>
        </ChatFooter>
      </ChatModal>
    </>
  );
};

export default ChatBot; 