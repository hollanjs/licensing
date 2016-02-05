from django.conf.urls import url
from . import views
from .views import LicensorList

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^compiler/$', views.compiler, name = 'compiler'),
    url(r'^licensors/$', LicensorList.as_view()),
]