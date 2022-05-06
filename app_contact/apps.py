###############################################################################
"""
Python apps file for the Django Contact app
"""
# IMPORTED RESOURCES #

# EXTERNAL:
from django.apps import AppConfig

###############################################################################


class AppContactConfig(AppConfig):
    """
    Class for Configuration of Application
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app_contact'
