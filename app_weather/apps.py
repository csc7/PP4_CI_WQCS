###############################################################################
"""
Python apps file for the Django Weather app
"""
# IMPORTED RESOURCES #

# EXTERNAL:
from django.apps import AppConfig

###############################################################################


class AppWeatherConfig(AppConfig):
    """
    Class for Configuration of Application
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app_weather'
