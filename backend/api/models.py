from django.db import models


# Create your models here.
class User (models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField()

    class Meta:
        verbose_name = 'user'


class Article (models.Model):
    title = models.CharField(max_length=200, default='untitled')
    content = models.TextField(default='empty')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name='articles',on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'article'


class Comment (models.Model):
    content = models.TextField(default='empty')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    article = models.ForeignKey(Article, related_name='comments', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'comment'
