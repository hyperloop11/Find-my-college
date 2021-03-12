from django.shortcuts import render, HttpResponse
from  .models import College, Review
# Create your views here.

def home(request):
    context = {
        'colleges': College.objects.all()
    }
    return render(request, 'college/home.html', context)

def review_home(request):
    return HttpResponse('<h1>Reviews home</h1>')
