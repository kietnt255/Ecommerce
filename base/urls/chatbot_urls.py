from django.urls import path
from base.views.chatbot_views import chat_with_gemini

urlpatterns = [
    path('', chat_with_gemini, name='chatbot'),
]