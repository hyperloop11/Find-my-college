from django.contrib import admin
from .models import College, Review, Rating, Wishlist
# Register your models here.
admin.site.register(College)
admin.site.register(Review)
admin.site.register(Rating)
admin.site.register(Wishlist)
