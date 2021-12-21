# Code copied from Code Institute "I Think Therefore I Blog" project
# on December 20th, 2022 at 18:09

from . import views
from django.urls import path
#from .views import WeatherPageView

urlpatterns = [
    path('', views.PostList.as_view(), name="home"),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),

    #path('/weather/', WeatherPageView.as_view(), name='weather'),
    #path('blog/', BlogPageView.as_view(), name='blog'),
    #path('contact/', ContactPageView.as_view(), name='contact'),
    
    #path('like/<slug:slug>', views.PostLike.as_view(), name='post_like'),
    #path("/weather/", views.PostList.as_view(), name="weather"),
    #path("/blog/", views.PostList.as_view(), name="blog"),
    #path("/contact", views.PostList.as_view(), name="contact"),
]