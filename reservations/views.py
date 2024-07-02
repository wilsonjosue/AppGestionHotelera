from django.shortcuts import render
from rest_framework import viewsets
from .models import Guest, Room, Reservation
from .serializers import GuestSerializer, RoomSerializer, ReservationSerializer
# Create your views here.
#Agrupan la lógica relacionada con las vistas en conjuntos, proporcionando acciones CRUD 
#predeterminadas y utilizando los serializadores para manejar la entrada y salida de datos.

class GuestViewSet(viewsets.ModelViewSet):
    queryset = Guest.objects.all()# El conjunto de datos que debe de ser devuelto 
    serializer_class = GuestSerializer# Especifica el serializador para este viewset.

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()# El conjunto de datos que debe de ser devuelto 
    serializer_class = RoomSerializer# Especifica el serializador para este viewset.

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()# El conjunto de datos que debe de ser devuelto 
    serializer_class = ReservationSerializer# Especifica el serializador para este viewset.

def index(request):
    return render(request,"index.html")

    