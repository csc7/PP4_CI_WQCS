###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.contrib import admin

# INTERNAL:
from .models import DataAndTimeForData, WindData, TemperatureData
from .models import OtherWeatherData

###############################################################################


# Site Registrations

class DataAndTimeForDataAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'date',
        'time'
    )


class WindDataAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'wind_rec_id',
        'wind_rec_id_id',
        'wind_speed',
        'wind_direction'
    )


class TemperatureDataAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'temp_rec_id',
        'temp_rec_id_id',
        'temperature',
        'feels_like',
        'temperature_max',
        'temperature_min'
    )

class OtherWeatherDataAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'other_rec',
        'other_rec_id',
        'pressure',
        'humidity',
        'visibility',
        'sky',
        'main',
        'description',
        'sunrise',
        'sunset'
    )

admin.site.register(DataAndTimeForData, DataAndTimeForDataAdmin)
admin.site.register(WindData, WindDataAdmin)
admin.site.register(TemperatureData, TemperatureDataAdmin)
admin.site.register(OtherWeatherData, OtherWeatherDataAdmin)
