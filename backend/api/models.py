from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Paciente(models.Model):

    nome = models.CharField(max_length=250)
    telefone = models.CharField(max_length=250)
    endereco = models.CharField(max_length=250)
    numero = models.CharField(max_length=250)
    cidade = models.CharField(max_length=250)
    estado = models.CharField(max_length=250)
    pais = models.CharField(max_length=250)
    cep = models.CharField(max_length=250)
    data_criacao = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-nome',)

    def __str__(self):
        return self.nome