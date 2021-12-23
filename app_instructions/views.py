from django.shortcuts import render

# Create your views here.

def get_instructions_page(request):
    return render(request, "index.html")
