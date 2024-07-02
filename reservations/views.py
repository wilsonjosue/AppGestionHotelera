from django.shortcuts import render
from rest_framework import viewsets
from .models import Guest, Room, Reservation
from .serializers import GuestSerializer, RoomSerializer, ReservationSerializer
# Create your views here.

class GuestViewSet(viewsets.ModelViewSet):
    queryset = Guest.objects.all()


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()