from django.urls import path
from . import views
from .views import CollegeListView, CollegeDetailView, RatingCreateView, ReviewCreateView

urlpatterns = [
    path('', views.home, name='landing-page'),
    path('home/', CollegeListView.as_view(), name='college-home'),
    path('college/<int:pk>/', CollegeDetailView.as_view(), name='college-detail'),
    path('rating/new/', RatingCreateView.as_view(), name='rating-create'),
    path('review/new/', ReviewCreateView.as_view(), name='review-create'),
    path('update_item/', views.update_item, name='update-item'),
]