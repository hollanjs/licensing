from django.contrib import admin
from .models import Licensor

# Register your models here.
class LicensorAdmin(admin.ModelAdmin):
    list_display = ('name', 'lic_type')

admin.site.register(Licensor, LicensorAdmin)