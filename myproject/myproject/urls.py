# myproject/urls.py

from django.contrib import admin
from django.urls import path
from .views import receive_feedback, feedback_list, home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('receive_feedback/', receive_feedback, name='receive_feedback'),
    path('feedback/', feedback_list, name='feedback_list'),
    path('', home, name='home'),  # Add this line to handle the root URL
]
