###############################################################################

""" Django_pp4_ci_wqcs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# IMPORTED RESOURCES #

# EXTERNAL:
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

###############################################################################


urlpatterns = [
    path('admin/', admin.site.urls),
    path('summernote/', include('django_summernote.urls')),
    path('', include('app_instructions.urls'), name='app_instruction_urls'),
    path('', include('app_weather.urls'), name='app_weather_urls'),
    path('', include('app_contact.urls'), name='app_contact_urls'),
    path('', include('app_blog.urls'), name='app_blog_urls'),
    path('accounts/', include('allauth.urls')),
]
