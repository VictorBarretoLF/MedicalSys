from django.db import models
from django.utils import timezone

class Patient(models.Model):

    name = models.CharField(max_length=250)
    telephone = models.CharField(max_length=250)
    address = models.CharField(max_length=250)
    number = models.CharField(max_length=250)
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=250)
    country = models.CharField(max_length=250)
    cep = models.CharField(max_length=250)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.name