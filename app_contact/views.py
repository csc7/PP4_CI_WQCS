from django.shortcuts import render

# Create your views here.

def get_contact_page(request):
    return render(request, "contact.html")