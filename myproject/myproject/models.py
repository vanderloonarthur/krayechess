# myapp/models.py

from django.db import models

class Feedback(models.Model):
    feedback = models.CharField(max_length=255)
    reaction = models.CharField(max_length=100)
    additional_comments = models.TextField()
