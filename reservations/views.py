from django.shortcuts import render
from rest_framework import viewsets
from .models import Guest, Room, Reservation
# Create your views here.

class GuestViewSet(viewsets.ModelViewSet):
    queryset = Guest.objects.all()


