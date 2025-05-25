from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import os
import requests
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
def get_chat_response(request):
    try:
        message = request.data.get('message')
        logger.info(f"Received chat message: {message}")
        
        if not message:
            return Response(
                {'message': 'Please provide a message'}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        # Make request to OpenRouter API
        logger.info("Making request to OpenRouter API")
        response = requests.post(
            'https://openrouter.ai/api/v1/chat/completions',
            json={
                'model': "deepseek/deepseek-r1-distill-qwen-32b:free",
                'messages': [
                    {
                        'role': "system",
                        'content': "You are a helpful AI assistant for an e-commerce website. You can help users with product information, shopping assistance, and general questions about the website. Keep your responses concise and relevant to e-commerce."
                    },
                    {
                        'role': "user",
                        'content': message
                    }
                ],
                'max_tokens': 150,
                'temperature': 0.7,
            },
            headers={
                'Authorization': f'Bearer {os.getenv("OPENROUTER_API_KEY")}',
                'HTTP-Referer': os.getenv('APP_URL', 'http://localhost:3000'),
                'X-Title': 'E-commerce Chatbot',
                'Content-Type': 'application/json'
            }
        )
        
        response.raise_for_status()  # Raise an exception for bad status codes
        ai_response = response.json()
        logger.info(f"Received AI response: {ai_response}")
        
        chat_response = ai_response['choices'][0]['message']['content']
        logger.info(f"Extracted chat response: {chat_response}")
        
        return Response({
            'response': chat_response
        })

    except requests.exceptions.RequestException as e:
        error_message = e.response.json() if hasattr(e, 'response') and e.response else str(e)
        logger.error(f"OpenRouter API error: {error_message}")
        return Response(
            {'message': f'Error getting AI response: {error_message}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    except Exception as e:
        return Response(
            {'message': f'Error: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        ) 