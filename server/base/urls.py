from django.urls import path, include
from . import views

urlpatterns = [
    path('api/login/', views.login_view),
    
  
]
