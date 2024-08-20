from rest_framework import generics
from .models import Animal
from .serializers import AnimalSerializer

# List all animals and create a new animal
class AnimalListCreateView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

# Delete an animal
class AnimalDeleteView(generics.DestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer