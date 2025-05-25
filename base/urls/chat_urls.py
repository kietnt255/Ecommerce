from django.urls import path
from base.views import chat_views as views

urlpatterns = [
    path('', views.get_chat_response, name="chat"),
] 