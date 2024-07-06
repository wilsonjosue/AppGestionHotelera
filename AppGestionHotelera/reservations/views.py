from django.shortcuts import render
from rest_framework import viewsets
from .models import Guest, Room, Reservation
from .serializers import GuestSerializer, RoomSerializer, ReservationSerializer
# Create your views here.
#Agrupan la lógica relacionada con las vistas en conjuntos, proporcionando acciones CRUD 
#predeterminadas y utilizando los serializadores para manejar la entrada y salida de datos.

class GuestListView(viewsets.ModelViewSet):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

class RoomListView(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class ReservationListView(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    