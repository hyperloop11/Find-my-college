from django.shortcuts import render, HttpResponse
from  .models import College, Review, Rating
from django.views.generic import ListView, DetailView, CreateView
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

class RatingCreateView(CreateView):
    model = Rating
    fields = ['college', 'author_year', 'academic', 'campus', 'mess_food', 'placements', 'senior_junior_interaction', 'coding_culture']

class ReviewCreateView(CreateView):
    model = Review
    fields = ['related_college','author_year','stars', 'title', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

# class ReviewListView(ListView):
#     model = Review.objects.filter_by(related_college)
