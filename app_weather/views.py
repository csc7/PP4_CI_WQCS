from django.shortcuts import render
from .models import WindData

#from django.contrib.staticfiles.storage import staticfiles_storage
#file_handle = staticfiles_storage.open('js/weather.js')
# contents = file_handle.read()


# Create your views here.

#def get_instructions_page(request):
#    return render(request, "index.html")

    
def get_weather_page(request):
    wind_speed_data = WindData.objects.all()
    a = request.GET.get('enter-manually-title')
    
    context = {
        
        'wind_data_example': a,
        'wind_speed': wind_speed_data
    }
    return render(request, "weather.html", context)




def new_page(request):
    data = request.GET['wind-speed-value']
    return render(request, {'data':data})


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