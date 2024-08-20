from django.urls import path
from .views import AnimalListCreateView, AnimalDeleteView

urlpatterns = [
    path('', AnimalListCreateView.as_view(), name='animal_list_create'),
    path('<int:pk>/', AnimalDeleteView.as_view(), name='animal_delete'),
]