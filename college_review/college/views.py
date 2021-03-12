from django.shortcuts import render

# Create your views here.

colleges = [
    {
        'name': 'IIT(ISM)',
        'image': 'abc.jpg',
        'ranking': 1
    },
    {
        'name': 'IIT(ISM)',
        'image': 'abc.jpg',
        'ranking': 2
    }
]

def home(request):
    context={
        'colleges': colleges
    }
    return render(request, 'college/home.html', context)
    #return HttpResponse('<h1>Hello</h1>')