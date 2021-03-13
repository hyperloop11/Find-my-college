from django.urls import path
from . import views
from .views import CollegeListView, CollegeDetailView

urlpatterns = [
    path('', views.home, name='landing-page'),
    path('home/', CollegeListView.as_view(), name='college-home'),
    path('college/<int:pk>/', CollegeDetailView.as_view(), name='college-detail')
]