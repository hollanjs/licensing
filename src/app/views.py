from django.shortcuts import render

# remove later
from django.views.generic import ListView
###############

from .models import Licensor


# Create your views here.
def index(request):
    return render(request, 'app/index.html', {})

def compiler(request):
    return render(request, 'app/compiler.html', {})

class LicensorList(ListView):
    model = Licensor
