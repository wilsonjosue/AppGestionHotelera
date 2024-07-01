from django.db import models

# Create your models here.

class Guest(models.Model):# Modelo para el invitado (cliente) Tabla
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()# email valido

    def __str__(self):
        return f"{self.first_name} {self.last_name}"#Método devuelve una representación en cadena

class Room(models.Model):# Modelo para la habitacion del(cliente) Tabla
    room_number = models.CharField(max_length=10)# Numero de habitacion
    room_type = models.CharField(max_length=50)# Tipo de habitacion
    is_available = models.BooleanField(default=True)# Si esta disponible

    def __str__(self):
        return f"Room {self.room_number} - {self.room_type}"

class Reservation(models.Model):# Modelo Reserva: Relaciona con las otras Tablas
    guest = models.ForeignKey(Guest, on_delete=models.CASCADE)# Relacion muchos a uno 
    room = models.ForeignKey(Room, on_delete=models.CASCADE)# Relacion muchos a uno
    check_in = models.DateField()#La fecha de entrada
    check_out = models.DateField()#Para la fecha de salida

    def __str__(self):
        return f"Reservation for {self.guest} in {self.room}"



