# Code copied from Code Institute "I Think Therefore I Blog" project
# on December 20th, 2022 at 18:09, later modified.

#from . import views
from app_contact import views
from django.urls import include, path
#from .views import WeatherPageView

urlpatterns = [
    #path('', views.get_instructions_page, name='instructions'),
    #path('weather/', views.get_weather_page, name='weather'),
    path("contact/", views.get_contact_page, name="contact"),
    #path('blog/', views.PostList.as_view(), name='blog'),
    #path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
]