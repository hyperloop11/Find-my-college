from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class College(models.Model):
    name=models.CharField(max_length=300)
    discription=models.TextField()
    rank=models.IntegerField()
    image = models.ImageField()
    website=models.URLField()
    address=models.CharField(max_length=400)
    is_in_wishlist=models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Review(models.Model):
    title=models.CharField(max_length=100)
    content = models.TextField()
    date_posted=models.DateTimeField(default=timezone.now)
    author=models.ForeignKey(User, on_delete=models.CASCADE)
    related_college=models.ForeignKey(College, on_delete=models.CASCADE)

    def __str__(self):
        return self.title