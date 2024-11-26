from django.db import models

# Create your models here.

class ToDo(models.Model):
    task=models.TextField()
    discription=models.TextField()