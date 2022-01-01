from django.shortcuts import render
from .models import WindData

import json
#from django.contrib.staticfiles.storage import staticfiles_storage
#file_handle = staticfiles_storage.open('js/weather.js')
# contents = file_handle.read()


# Create your views here.

#def get_instructions_page(request):
#    return render(request, "index.html")



from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_weather_page(request):
    
    #wind_speed_data = WindData.objects.all()
    #a = request.GET.get('data')
    #a = json.loads(request.POST.get('wd', ''))
    wind_speed_data = json.dumps(request.POST.get('wind_speed_data'))
    print(wind_speed_data)
    wind_speed_data = "2.2" # at the begining wind_speed_data is null!
    a=float(wind_speed_data)    


    record = WindData(date='2000-01-01 12:00', wind_speed=a, wind_direction=a)
    record.save()
    
    
    context = {
        
        'wind_speed_data': wind_speed_data,
        'wind_speed': WindData.objects.all()
    }
    return render(request, "weather.html", context)





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

