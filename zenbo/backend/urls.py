from django.contrib import admin
from django.urls import path
from backend import views

urlpatterns = [
    path('insert_login/',views.insert_login),
    path('upload_temperature/',views.upload_temperature),
    path('update_room_patient/',views.update_room_patient),
    path('validate_login/',views.validate_login),
]
