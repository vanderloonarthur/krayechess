from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('receive-feedback/', views.receive_feedback, name='receive_feedback'),
]
