###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.contrib import admin

# INTERNAL:
from .models import DataAndTimeForData, WindData, TemperatureData
from .models import OtherWeatherData

###############################################################################


admin.site.register(DataAndTimeForData)
admin.site.register(WindData)
admin.site.register(TemperatureData)
admin.site.register(OtherWeatherData)