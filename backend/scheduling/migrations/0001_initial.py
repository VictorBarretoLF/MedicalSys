# Generated by Django 4.1.3 on 2022-11-29 00:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Scheduling',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=1000)),
                ('status', models.CharField(choices=[('AC', 'A confirmar'), ('CF', 'Confirmado'), ('FN', 'Finalizado')], default='AC', max_length=20)),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
