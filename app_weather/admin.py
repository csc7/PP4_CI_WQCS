from django.contrib import admin
from .models import DataAndTimeForData, WindData, TemperatureData, OtherWeatherData

# Register your models here.

admin.site.register(DataAndTimeForData)
admin.site.register(WindData)
admin.site.register(TemperatureData)
admin.site.register(OtherWeatherData)