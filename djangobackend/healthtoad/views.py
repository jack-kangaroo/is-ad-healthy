from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse

from .encoders import (
  HealthRecordEncoder)

from .models import HealthRecord


@require_http_methods(["GET"])
def api_record(request):
  records = HealthRecord.objects.all()
  return JsonResponse(
    {"records": records},
    encoder=HealthRecordEncoder
  )
