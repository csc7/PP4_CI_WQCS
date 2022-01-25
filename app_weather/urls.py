###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.urls import include, path

# INTERNAL:
from app_weather import views

###############################################################################


# Code copied from Code Institute "I Think Therefore I Blog" project
# on December 20th, 2022 at 18:09, later modified.


urlpatterns = [
    #path('', views.get_instructions_page, name='instructions'),
    path('weather/', views.get_weather_page, name='weather'),
    #path("weather/", views.send_weather_data, name="weather"),
    #path('blog/', views.PostList.as_view(), name='blog'),
    #path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    #path('/api/post_note/', post_note_api, name="post_note_api"),
]