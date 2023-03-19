"""Editor URL Configuration"""

from django.contrib import admin
from django.urls import path
from .views import EditorPageView, get_marke37

urlpatterns = [
    path('letrista2marke37', get_marke37, name="get_marke37"),
    path('', EditorPageView.as_view(), name="home"),
]
