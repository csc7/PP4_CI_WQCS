###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.apps import AppConfig

###############################################################################


class AppBlogConfig(AppConfig):
    """
    Class for Configuration of Application
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app_blog'
