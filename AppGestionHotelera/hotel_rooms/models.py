from django.db import models

# Create your models here.

class HotelRoom(models.Model):
    ROOM_TYPES = [
        ('Suite Room', 'Suite Room'),
        ('King Room', 'King Room'),
        ('Family Room', 'Family Room'),
        ('Deluxe Room', 'Deluxe Room'),
    ]
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    room_type = models.CharField(max_length=20, choices=ROOM_TYPES)

    def __str__(self):
        return f"{self.name} - {self.room_type} - ${self.price}"
    
