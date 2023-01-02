from django.urls import path
from .views import api_record

urlpatterns = [
    path("records/", api_record, name="list_records")
]
