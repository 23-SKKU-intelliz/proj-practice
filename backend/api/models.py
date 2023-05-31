from django.db import models


# Create your models here.
class User (models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField()


class Article (models.Model):
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=20000)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Comment (models.Model):
    content = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
