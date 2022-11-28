from django.db import models
from django.utils import timezone
from users.models import NewUser
from patient.models import Patient

# Create your models here.
class Scheduling(models.Model):

    STATUS = [
        ('AC', 'A confirmar'),
        ('CF', 'Confirmado'),
        ('FN', 'Finalizado'),
    ]

    doctor = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    description = models.CharField(max_length=1000, blank=True)
    status = models.CharField(max_length=20, choices=STATUS, default='AC')
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.description