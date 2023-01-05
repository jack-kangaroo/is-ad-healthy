from django.urls import path
from .views import api_record, api_latest_record

urlpatterns = [
    path("records/", api_record, name="list_records"),
    path("records/today", api_latest_record, name="latest record"),
]
