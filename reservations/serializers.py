from rest_framework import serializers
from .models import Guest, Room, Reservation

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = '__all__'