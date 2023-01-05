from .modelencoder import ModelEncoder

from .models import HealthRecord


class HealthRecordEncoder(ModelEncoder):
  model = HealthRecord
  properties = [
    "id",
    "healthy",
    "type",
    "team",
    "date",
  ]