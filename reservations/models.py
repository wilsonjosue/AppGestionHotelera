from django.db import models

# Create your models here.
class Guest(models.Model):# Modelo para el invitado (cliente)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()

class Room(models.Model):# Modelo para la habitacion del(cliente)
    room_number = models.CharField(max_length=10)
    room_type = models.CharField(max_length=50)
    is_available = models.BooleanField(default=True)
    

