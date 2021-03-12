from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='college-home'),
    path('review/', views.review_home, name='college-review-home'),
]