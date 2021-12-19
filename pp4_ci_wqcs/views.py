from django.shortcuts import render, HttpResponse
from django.views import generic, View


# Create your views here.
def get_base(request):
    return render(request, "pp4_ci_wqcs/base.html")

def get_index(request):
    return render(request, "pp4_ci_wqcs/index.html")

def get_contact(request):
    return render(request, "pp4_ci_wqcs/contact.html")

def get_weather(request):
    return render(request, "pp4_ci_wqcs/weather.html")

def get_blog(request):
    return render(request, "pp4_ci_wqcs/blog.html")