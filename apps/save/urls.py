from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.signin),
    url(r'^register', views.register),
    url(r'^login', views.login),
    url(r'^logout', views.logout),
    url(r'^intro', views.intro),
    url(r'^dashboard', views.dashboard),
    url(r'^newchar', views.newchar),
    url(r'^start/(?P<charid>\d+)', views.start),
    url(r'^view/(?P<charid>\d+)', views.character),
    url(r'^delete/(?P<charid>\d+)', views.delete),
    url(r'^save', views.save),
    url(r'^load', views.load),
    url(r'^game', views.game)
]