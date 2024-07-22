from rest_framework import serializers
from.models import Guest, Room, Reservation

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ['id', 'first_name', 'last_name', 'email']

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'room_number', 'room_type', 'is_available']

class ReservationSerializer(serializers.ModelSerializer):
    guest = GuestSerializer(read_only=True)
    room = RoomSerializer(read_only=True)

    class Meta:
        model = Reservation
        fields = ['id', 'guest', 'room', 'check_in', 'check_out']