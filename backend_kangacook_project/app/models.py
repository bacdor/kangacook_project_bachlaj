from django.db import models
from django.core.validators import MinValueValidator


class Animal(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=10)
    legs_count = models.IntegerField(validators=[MinValueValidator(0)])
    is_mammal = models.BooleanField(default=False)
    description = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.name