from django.db import models
from django.utils import timezone

# Create your models here.

class Login_id(models.Model):
    user = models.CharField(max_length=100)
    
    def __str__(self):
        return self.user

class current_room_patient_record(models.Model):
    room_num = models.IntegerField(unique=True)
    patient_id = models.CharField(max_length=20)

    def __str__(self):
        return self.room_num

class Patient_temperature(models.Model):
    patient_id = models.CharField(max_length=20)
    temperature = models.DecimalField(max_digits=4, decimal_places=2) #??.??
    create_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.patient_id

class Patient_bloodpressure(models.Model):
    patient_id = models.CharField(max_length=20)
    bloodpressure = models.IntegerField()
    create_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.patient_id


