from django.db import models

# Create your models here.
class Licensor(models.Model):
    name = models.CharField(max_length = 50)
    legal = models.TextField()

    def __str__(self):
        return self.name