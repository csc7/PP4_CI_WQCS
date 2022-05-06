###############################################################################
"""
Django URLs for the Instructions app
"""
# IMPORTED RESOURCES #

# EXTERNAL:
from django.urls import include, path

# INTERNAL:
from app_instructions import views

###############################################################################


# Code copied from Code Institute "I Think Therefore I Blog" project
# on December 20th, 2022 at 18:09, later modified.


urlpatterns = [
    path('', views.get_instructions_page, name='instructions'),
]