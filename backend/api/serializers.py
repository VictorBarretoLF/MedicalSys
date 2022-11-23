from rest_framework import serializers
from models import Paciente


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'nome', 'telefone', 'endereco', 'numero', 'cidade', 'estado', 'pais', 'cep')
        model = Paciente