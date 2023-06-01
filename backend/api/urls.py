from django.urls import path

from api import views

app_name = 'api'
urlpatterns = [
    path('users/', views.UserViewSet.as_view({
        'post': 'create'
    }), name='users_list_create'),
    path('users/<int:pk>', views.UserViewSet.as_view({
        'get': 'retrieve'
    }), name='users_detail'),
    path('articles/', views.ArticleViewSet.as_view({
        'get': 'list',
        'post': 'create'
    }), name='articles_list_create'),
    path('articles/<int:pk>', views.ArticleViewSet.as_view({
        'get': 'retrieve'
    }), name='articles_detail_delete'),
    path('comments/', views.CommentViewSet.as_view({
        'get': 'list',
        'post': 'create'
    }), name='comments_create')
]