from django.shortcuts import render
from .models import DataAndTimeForData, WindData, TemperatureData, OtherWeatherData
import json
import re

#from django.contrib.staticfiles.storage import staticfiles_storage
#file_handle = staticfiles_storage.open('js/weather.js')
# contents = file_handle.read()


# Create your views here.


from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_weather_page(request):
    # Check if request is AJAX, accessed on January 4th, 2022, at 2058, in
    # https://stackoverflow.com/questions/8508602/check-if-request-is-ajax-in-python
    requested_html = re.search(r'^text/html', request.META.get('HTTP_ACCEPT'))
    if not requested_html:
        
        # Indexes from 1 to -1 to delete quotation marks
        # Date and time
        value_date = json.dumps(request.POST.get('value_date'))[1:-1]
        value_time = json.dumps(request.POST.get('value_time'))[1:-1]
        # Wind data
        wind_speed_data = float(json.dumps(request.POST.get('value_wind'))[1:-1])
        wind_direction_data = float(json.dumps(request.POST.get('value_wind_dir'))[1:-1])
        # Temperature data
        value_temperature = float(json.dumps(request.POST.get('value_temperature'))[1:-1])
        value_feels_like = float(json.dumps(request.POST.get('value_feels_like'))[1:-1])
        value_temperature_max = float(json.dumps(request.POST.get('value_temperature_max'))[1:-1])
        value_temperature_min = float(json.dumps(request.POST.get('value_temperature_min'))[1:-1])
        # Other weather data
        value_pressure = float(json.dumps(request.POST.get('value_pressure'))[1:-1])
        value_humidity = float(json.dumps(request.POST.get('value_humidity'))[1:-1])
        value_visibility = json.dumps(request.POST.get('value_visibility'))[1:-1]
        value_clouds = float(json.dumps(request.POST.get('value_clouds'))[1:-1])
        value_main = json.dumps(request.POST.get('value_main'))[1:-1]
        value_description = json.dumps(request.POST.get('value_description'))[1:-1]
        value_country = json.dumps(request.POST.get('value_country'))[1:-1]
        value_sunrise = json.dumps(request.POST.get('value_sunrise'))[1:-1]
        value_sunset = json.dumps(request.POST.get('value_sunset'))[1:-1]


        #wind_speed_data = "0" # at the begining wind_speed_data is null!
        a=float(wind_speed_data)
        print(float(a)+10)
        print("It's AJAX")
        
        record = DataAndTimeForData(date = value_date, time=value_time)
        record.save()
        pk = record.id
        
        record = WindData(wind_rec_id_id = pk,
                          wind_speed = wind_speed_data,
                          wind_direction=wind_direction_data)
        record.save()
        
        #d = WindData.objects.get()
        #print(d)
        record = TemperatureData(temp_rec_id_id = pk,
                                 temperature = value_temperature,
                                 feels_like = value_feels_like,
                                 temperature_max = value_temperature_max,
                                 temperature_min = value_temperature_min)
        record.save()

        record = OtherWeatherData(other_rec_id = pk,
                                  pressure = value_pressure,
                                  humidity = value_humidity,
                                  visibility = value_visibility,
                                  sky = value_clouds,
                                  main = value_main,
                                  description = value_description,
                                  sunrise = value_sunrise,
                                  sunset = value_sunset)
        record.save()    
    
    context = {
            'date_and_time': DataAndTimeForData.objects.all(),
            'wind_data': WindData.objects.all(),
            'temperature_data': TemperatureData.objects.all(),
            #'other_weather_data': OtherWeatherData.objects.order_by('-id')[:2] #last two
            'other_weather_data': OtherWeatherData.objects.all()
        }    
    #print(context['date_and_time'])
    return render(request, "weather.html", context)

#@csrf_exempt
#def send_weather_data(request):
#    if request.is_ajax():
#        wind_speed_data = (request.POST.get('value_wind'))
#        a=float(wind_speed_data)    
#        print(wind_speed_data)
#        record = WindData(date='2000-01-01 12:00', wind_speed=a, wind_direction=a)
#        record.save()
#        context = {
#            'wind_speed': WindData.objects.all()
#        }
#        #return render(request, "weather.html", context)






#def save_result(request):
#    table_data = json.loads(request.POST.get('wind_value'))
#    print(table_data)
#    return render(request, 'weather.html')


#def new_page(request):
#    data = request.GET['wind-speed-value']
#    return render(request, {'data':data})


#def weather_form(request):
#    if request.method == "post":
#        a = request.POST.get("wind-speed")
#        print (a)
#    return render(request,"weather.html", context="asdfsdf")


#weather_data_form = request.POST


#def get_contact_page(request):
#    return render(request, "contact.html")


#def post(self,request, *args, **kwargs):
#    if self.request.is_ajax():
#        return self.ajax(request)
#
#def ajax(self, request):
#    response_dict= {
#        'success': True,
#    }
#    action = request.POST.get('action','')
#
#    if action == 'add_car':
#        car_id = request.POST.get('id','')
#
#    if hasattr(self, action):
#        response_dict = getattr(self, action)(request)
#        car = CAR.objects.get(ida_name='car_id')
#        response_dict = {
#            'car_name':car.name
#        }
#
#    return HttpResponse(simplejson.dumps(response_dict),
#                        mimetype='application/json')

#def weather_data(request, id):
#    post_id = request.GET['wd']
#    print(post_id)
#    #sql insertion code,once its done i want to notify to the front end..print some alert message.
#    return render(request, "weather.html")

