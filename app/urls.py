from django.urls import path
from . import views

app_name = "app"

urlpatterns = [
    path('notes', views.notes, name='notes'),
    path('notes/detail/<int:id>', views.notes_detail, name='notes_detail'),
]
