from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'telephone', 'address', 'number', 'city', 'state', 'country', 'cep', 'created_at')
        model = Patient

        