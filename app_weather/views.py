from django.shortcuts import render
from .models import WindData

# Create your views here.

#def get_instructions_page(request):
#    return render(request, "index.html")

    
def get_weather_page(request):
    wind_speed_data = WindData.objects.all()
    context = {
        'wind_speed': wind_speed_data
    }
    return render(request, "weather.html", context)


#def get_contact_page(request):
#    return render(request, "contact.html")