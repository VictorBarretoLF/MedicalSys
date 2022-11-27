from rest_framework import serializers
from .models import Scheduling

class SchedulingSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'description', 'status', 'date', 'doctor', 'patient')
        model = Scheduling
