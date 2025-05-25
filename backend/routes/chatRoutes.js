const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const axios = require('axios');

// @desc    Get AI response for chat message using OpenRouter (DeepSeek model)
// @route   POST /api/chat
// @access  Public
const getChatResponse = asyncHandler(async (req, res) => {
  const { message } = req.body;

  if (!message) {
    res.status(400);
    throw new Error('Please provide a message');
  }

  try {
    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
      model: "deepseek/deepseek-r1-distill-qwen-32b:free",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant for an e-commerce website. You can help users with product information, shopping assistance, and general questions about the website. Keep your responses concise and relevant to e-commerce."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.APP_URL || 'http://localhost:3000', // Required by OpenRouter
        'X-Title': 'E-commerce Chatbot', // Optional but recommended
        'Content-Type': 'application/json'
      }
    });

    res.json({
      response: response.data.choices[0].message.content
    });
  } catch (error) {
    console.error('OpenRouter API Error:', error.response?.data || error.message);
    res.status(500);
    throw new Error('Error getting AI response');
  }
});

router.post('/', getChatResponse);

module.exports = router; 