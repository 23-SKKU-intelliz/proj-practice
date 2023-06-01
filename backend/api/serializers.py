from rest_framework import serializers

from api.models import User, Article, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class ArticleBriefSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'created_at', 'modified_at', 'user']


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_at', 'modified_at', 'user']


class ArticleDetailSerializer(ArticleBriefSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta(ArticleBriefSerializer.Meta):
        fields = ArticleBriefSerializer.Meta.fields + ['comments']
