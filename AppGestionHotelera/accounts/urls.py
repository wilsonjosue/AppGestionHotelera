#AppGestionHotelera/accounts/urls.py
from django.urls import path
#from .views import RegisterView, LoginView, LogoutView

from django.urls import path
from .views import register, login_view, logout_view
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.urls import path
from .views import LoginAPIView
urlpatterns = [
    path('register/', register, name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', logout_view, name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]