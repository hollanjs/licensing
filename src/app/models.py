from django.db import models

# Create your models here.
class Licensor(models.Model):
	name = models.CharField(max_length = 50)
	legal = models.TextField()

	LICENSING_TYPE = (
		('c', 'Car Manufacturer'),
		('w', 'Wheels and Tires'),
		('h', 'Hollywood'),
		('m', 'Miscellaneous'),
	)
	lic_type = models.CharField(max_length=1,
									 choices=LICENSING_TYPE,
									default='c')

	class Meta:
		ordering = ['lic_type', 'name']

	def __str__(self):
		return self.name