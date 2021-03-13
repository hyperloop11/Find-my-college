from django.shortcuts import render, HttpResponse
from  .models import College, Review
from django.views.generic import ListView, DetailView
# Create your views here.

def home(request):
    # context = {
    #     'colleges': College.objects.all()
    # }
    # return render(request, 'college/home.html', context)
    return HttpResponse('<h1>Landing</h1>')

class CollegeListView(ListView):
    model = College
    context_object_name='colleges'
    template_name = 'college/home.html'
    ordering =['rank']

class CollegeDetailView(DetailView):
    model = College


# class ReviewListView(ListView):
#     model = Review.objects.filter_by(related_college)
