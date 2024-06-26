from django.db import models

class Feedback(models.Model):
    feedback = models.CharField(max_length=255)
    reaction = models.CharField(max_length=50)
    additional_comments = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.feedback
