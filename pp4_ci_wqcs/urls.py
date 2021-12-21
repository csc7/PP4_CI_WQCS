# Code copied from Code Institute "I Think Therefore I Blog" project
# on December 20th, 2022 at 18:09, later modified.

from . import views
from django.urls import include, path
#from .views import WeatherPage

urlpatterns = [
    path('blog/', views.PostList.as_view(), name='blog'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),

    #path('blog/', BlogPageView.as_view(), name='blog'),
    #path('contact/', ContactPageView.as_view(), name='contact'),
    
    #path('like/<slug:slug>', views.PostLike.as_view(), name='post_like'),
    path('', views.get_instructions_page, name='instructions'),
    path('/weather/', views.get_weather_page, name='weather'),
    path("/contact/", views.get_contact_page, name="contact"),
]