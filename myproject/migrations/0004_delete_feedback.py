# Generated by Django 5.0.6 on 2024-06-20 08:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myproject', '0003_feedback_created_at'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Feedback',
        ),
    ]
