from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^compiler/$', views.compiler, name = 'compiler'),
]