from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
###############

from .models import Licensor


# Create your views here.
def index(request):
    return render(request, 'app/index.html', {})

def compiler(request):
    licensors = Licensor.objects.all()
    template = loader.get_template('app/compiler.html')
    context = {
        'licensors': licensors,
    }
    return HttpResponse(template.render(context, request))

# def compiler(request):
# 	licensors = Licensor.objects.all()
# 	return render(request, 'app/compiler.html', { licensors : licensors })


