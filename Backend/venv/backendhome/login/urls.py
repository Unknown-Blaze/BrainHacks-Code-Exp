from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.LoginView.as_view(), name = 'login'),
    path('login/all', views.LoginListAPIView.as_view()),
    path('register', views.UserRegistrationView.as_view())
]

