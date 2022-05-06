###############################################################################

"""
Django URLs for the blog app
"""

# IMPORTED RESOURCES #

# EXTERNAL:
from django.urls import include, path

# INTERNAL:
from app_blog import views

###############################################################################


# Code copied from Code Institute "I Think Therefore I Blog" project
# on December 20th, 2022 at 18:09, later modified.


urlpatterns = [
    path('blog/', views.PostList.as_view(), name='blog'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('delete_comment/<int:comment_id>/',
         views.delete_comment, name='delete_comment'),
    path('like/<int:post_id>/', views.like, name='like'),
    path('dislike/<int:post_id>/', views.dislike, name='dislike'),
]
