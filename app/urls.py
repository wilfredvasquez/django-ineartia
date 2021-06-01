from django.urls import path
from . import views

app_name = "app"

urlpatterns = [
    path('', views.index, name="index"),
    path('notes', views.notes, name='notes'),
    path('notes/detail/<int:id>', views.notes_detail, name='notes_detail'),
    path('notes/edit/<int:id>', views.notes_edit, name='notes_edit'),
    path('notes/delete/<int:id>', views.notes_delete, name='notes_delete'),
    path('notes/create/', views.notes_create, name='notes_create'),
]
