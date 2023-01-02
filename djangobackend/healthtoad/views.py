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

@require_http_methods(["GET"])
def api_latest_record(request):
  # refactor to consider using SQL or different logic
  latest_records = HealthRecord.objects.order_by('-date')
  return JsonResponse(
    {"records": latest_records[0]},
    encoder=HealthRecordEncoder
  )