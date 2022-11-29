# Generated by Django 4.1.3 on 2022-11-29 13:12

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('telephone', models.CharField(max_length=250)),
                ('address', models.CharField(max_length=250)),
                ('number', models.CharField(max_length=250)),
                ('city', models.CharField(max_length=250)),
                ('state', models.CharField(max_length=250)),
                ('country', models.CharField(max_length=250)),
                ('cep', models.CharField(max_length=250)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ('-created_at',),
            },
        ),
    ]