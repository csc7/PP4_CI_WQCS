"""django_pp4_ci_wqcs URL Configuration

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
from django.contrib import admin
from django.urls import path, include
#from pp4_ci_wqcs.views import get_base
#from pp4_ci_wqcs.views import get_index
#from pp4_ci_wqcs.views import get_weather
#from pp4_ci_wqcs.views import get_blog
#from pp4_ci_wqcs.views import get_contact

urlpatterns = [
    path('admin/', admin.site.urls),    
    path('summernote/', include('django_summernote.urls')),
    path('', include('pp4_ci_wqcs.urls'), name='pp4_ci_wqcs-urls'),
    #path('base/', get_base, name='get_base'),
    #path('', get_index, name='get_index'),
    #path('weather/', get_weather, name='get_weather'),
    #path('blog/', get_blog, name='get_blog'),    
]
