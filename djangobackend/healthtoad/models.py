from django.db import models

class HealthRecord(models.Model):
  healthy = models.BooleanField(default=True)
  type = models.CharField(max_length=30)
  team = models.CharField(max_length=30)
  date = models.DateField(auto_now=False, auto_now_add=False, unique=True)

  def __str__(self):
    date_str = str(self.date)
    if self.healthy == True:
      return f"{date_str} is healthy!"
    else:
      return f"{date_str} is injured :("