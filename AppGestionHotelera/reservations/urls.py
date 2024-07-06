from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GuestViewSet, RoomViewSet, ReservationViewSet
from . import views

router = DefaultRouter()# Automáticamente maneja la configuración de rutas para los viewsets.
router.register(r'guests', GuestViewSet)#Registra cada viewset con el router
router.register(r'rooms', RoomViewSet)
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', views.index,name='index'),
    path('api/', include(router.urls)),# Incluye todas las rutas generadas por el DefaultRouter
]
