import React, { useState } from 'react';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Message from './Message';

// Animation for the chat icon
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ChatIcon = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #495057 0%, #343a40 100%);
  border: none;
  box-shadow: 0 4px 15px rgba(73, 80, 87, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #343a40 0%, #212529 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(73, 80, 87, 0.4);
    animation: ${pulse} 2s infinite;
  }

  svg {
    transition: transform 0.3s ease;
    width: 32px;
    height: 32px;
  }

  &:hover svg {
    transform: rotate(10deg) scale(1.1);
  }
`;

const ChatModal = styled(Modal)`
  .modal-content {
    border-radius: 20px;
    border: none;
    box-shadow: 0 10px 30px rgba(52, 58, 64, 0.15);
    overflow: hidden;
  }
`;

const ChatHeader = styled(Modal.Header)`
  background: #343a40;
  color: white;
  border-radius: 20px 20px 0 0;
  padding: 1.2rem;
  position: relative;
  
  .close {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    opacity: 0.8;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    
    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-50%) rotate(90deg);
    }

    &:focus {
      box-shadow: none;
      outline: none;
    }
  }

  .modal-title {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    gap: 0.5rem;

    svg {
      color: #adb5bd;
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: rotate(15deg);
    }
  }
`;

const ChatBody = styled(Modal.Body)`
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
`;

const MessageBubble = styled.div`
  margin-bottom: 15px;
  max-width: 80%;
  padding: 12px 18px;
  border-radius: 18px;
  font-size: 0.95rem;
  line-height: 1.4;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  ${props => props.isUser ? `
    margin-left: auto;
    background: #343a40;
    color: white;
    border-bottom-right-radius: 4px;
  ` : `
    margin-right: auto;
    background: white;
    color: #343a40;
    border-bottom-left-radius: 4px;
    border: 1px solid #e2e8f0;
  `}
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
`;

const ChatFooter = styled(Modal.Footer)`
  border-top: 1px solid #e2e8f0;
  padding: 15px 20px;
  background: white;
`;

const StyledForm = styled(Form)`
  .form-control {
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    padding: 12px 15px;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    
    &:focus {
      border-color:rgb(64, 74, 84);
      box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.1);
    }
  }
  
  .btn {
    border-radius: 12px;
    padding: 12px 20px;
    background: #343a40;
    border: none;
    transition: all 0.3s ease;
    
    &:hover {
      background: #23272b;
      transform: translateY(-1px);
    }
    
    &:disabled {
      background: #adb5bd;
      transform: none;
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(2px);
    }
  }
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
        <FaRobot color="white" />
      </ChatIcon>

      <ChatModal show={show} onHide={handleClose} centered>
        <ChatHeader closeButton>
          <Modal.Title>
            <FaRobot size={28} className="me-2" />
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
          <StyledForm onSubmit={handleSendMessage} className="w-100">
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
          </StyledForm>
        </ChatFooter>
      </ChatModal>
    </>
  );
};

export default ChatBot; 