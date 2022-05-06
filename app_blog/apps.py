###############################################################################
"""
Python apps file for the Django Blog app
"""
# IMPORTED RESOURCES #

# EXTERNAL:
from django.apps import AppConfig

###############################################################################


class AppBlogConfig(AppConfig):
    """
    Configuration class for the blog app
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app_blog'
