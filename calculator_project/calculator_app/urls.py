from django.urls import path
from . import views

urlpatterns = [
    path('calculate/', views.calculate_view, name='calculate_view'),
]