from django.shortcuts import render

# Create your views here.

#def get_instructions_page(request):
#    return render(request, "index.html")

    
def get_weather_page(request):
    return render(request, "weather.html")


#def get_contact_page(request):
#    return render(request, "contact.html")