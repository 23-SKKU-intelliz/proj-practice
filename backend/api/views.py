from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from api.models import User, Article, Comment
from api.serializers import UserSerializer, CommentSerializer, ArticleBriefSerializer, ArticleDetailSerializer
from rest_framework.viewsets import ModelViewSet


class UserViewSet(ModelViewSet):
    def get_serializer_class(self):
        return UserSerializer

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)

    def create(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, *args, **kwargs):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=kwargs.get('pk'))
        serializer = UserSerializer(user)
        return Response(serializer.data)


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ArticleDetailSerializer
        return ArticleBriefSerializer

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)

    def list(self, request, *args, **kwargs):
        queryset = Article.objects.all()
        serializer = ArticleBriefSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = ArticleDetailSerializer(data=request.data)
        user_id = request.data.get('user_id')
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response("user not found", status=404)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, *args, **kwargs):
        queryset = Article.objects.all()
        user = get_object_or_404(queryset, pk=kwargs.get('pk'))
        serializer = ArticleDetailSerializer(user)
        return Response(serializer.data)


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    def get_serializer_class(self):
        return CommentSerializer

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)

    def list(self, request, *args, **kwargs):
        queryset = Comment.objects.filter(article_id=request.query_params.get('article_id'))
        serializer = CommentSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = CommentSerializer(data=request.data)
        user_id = request.data.get('user_id')
        article_id = request.query_params.get('article_id')

        try:
            user = User.objects.get(id=user_id)
            article = Article.objects.get(id=article_id)
        except Article.DoesNotExist:
            return Response("article not found", status=404)
        except User.DoesNotExist:
            return Response("user not found", status=404)
        if serializer.is_valid():
            serializer.save(user=user, article=article)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
