from django.urls import path, include
from rest_framework import routers
from. import views

router = routers.DefaultRouter()
router.register(r'guests', views.GuestListView, basename='guests')
router.register(r'rooms', views.RoomListView, basename='rooms')
router.register(r'reservations', views.ReservationListView, basename='reservations')

urlpatterns = [
    path('', include(router.urls)),
]