"""Editor URL Configuration"""

from django.contrib import admin
from django.urls import path
from .views import EditorPageView, EnglishExamplePageView, SpanishExamplePageView, get_marke37

urlpatterns = [
    # Text processing view.
    path('letrista2marke37', get_marke37, name="get_marke37"),
    # Editor with an example in the given language.
    path('example', EnglishExamplePageView.as_view(), name="example.en"),
    path('ejemplo', SpanishExamplePageView.as_view(), name="example.es"),
    # Editor.
    path('', EditorPageView.as_view(), name="home"),
]
