# models.py
from django.db import models

class Feedback(models.Model):
    feedback = models.TextField()
    reaction = models.CharField(max_length=255)
    additional_comments = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name