###############################################################################
"""
Django admin comfiguration for the Contact app
"""
# IMPORTED RESOURCES #

# EXTERNAL:
from django.contrib import admin

# INTERNAL:
from .models import DataFromContactForm

###############################################################################


# Site registrations

admin.site.register(DataFromContactForm)
