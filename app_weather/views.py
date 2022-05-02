###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.shortcuts import render
import json
import re
from itertools import chain
from django.http import JsonResponse
from django.core import serializers
from django.contrib import messages

# INTERNAL:
from .models import DataAndTimeForData, WindData
from .models import TemperatureData, OtherWeatherData

###############################################################################


from django.views.decorators.csrf import csrf_exempt
from collections import namedtuple




#for item in WindData(wind_rec_id_id=pk):
#    print(item)

#wind_data = WindData.objects.all()
#for data in wind_data:
#    print(data.wind_rec_id)


recs = 5
other_value_to_display_1 = 'pressure'
other_value_to_display_2 = 'sky'


class JSONData:
    """
    Class for instantiate the dictionary that will be part of the
    serialization for the returned JsonResponse
    """
    def __init__(self, JSON_dict):
        self.JSON_dict = JSON_dict
            



@csrf_exempt
def get_weather_page(request):
    """
    Views for Weather Page/App and Processing of weather data
    from OpenWeatherMap App
    """

    messages.success(request, "Record written")

    global recs
    global other_value_to_display_1
    global other_value_to_display_2

    # Check if request is AJAX, accessed on January 4th, 2022, at 2058, in
    # https://stackoverflow.com/questions/8508602/check-if-request-is-ajax-in-python
    requested_html = re.search(r'^text/html',
                               request.META.get('HTTP_ACCEPT')
                               )

    if not requested_html:

        # Selected Data, identify if new record needs to be written
        # and if 5 or 15 of them will be shown
        write_data = json.dumps(request.POST.get('writeData'))[1:-1]
        records_to_display = (json.dumps(request.POST.get(
                                         'recordsToDisplay'))[1:-1]
                              )
        if records_to_display == "5-last":
            recs = 5
        elif records_to_display == "15-last":
            recs = 15
        else:
            recs = DataAndTimeForData.objects.filter().count()

        other_value_to_display_1 = str(json.dumps(request.POST.get(
                                                  'otherValueToDisplay1')
                                                  )[1:-1])
        other_value_to_display_2 = str(json.dumps(request.POST.get(
                                                  'otherValueToDisplay2')
                                                  )[1:-1])

        
        ##############################################

        # Edit record
        #if write_data == "edition":
        print("Editing: " + str(request.headers.get('editionMode')))
        if request.headers.get('x-requested-with') == 'XMLHttpRequest' and request.headers.get('editionMode') == "on":
            print("Editing: YES")
            
            id = int(request.headers.get('id'))
            other_value_to_display_1 = request.headers.get('otherValueToDisplay1')
            other_value_to_display_2 = request.headers.get('otherValueToDisplay2')
            country = request.headers.get('country')
            print(other_value_to_display_1)
            print(other_value_to_display_2)
            print("Edition mode.")       
            

            #id = str(json.dumps(request.POST.get(
            #                                      'id')
            #                                      )[1:-1])
            print(id)
            #context_edit = {
            #    'edition': True,
            #    'date_and_time_': DataAndTimeForData.objects.get(id=id),
            #    'wind_data_': WindData.objects.get(wind_rec_id_id=id),
            #    'temperature_data_': TemperatureData.objects.get(temp_rec_id_id=id),
            #    'other_weather_data_': OtherWeatherData.objects.get(other_rec_id=id)
            #}
            
            
            dictionary = {}

            dict_elem_1 = DataAndTimeForData.objects.filter(id=id).values('date', 'time')
            serialized_JSON = JSONData(dict_elem_1[0])
            date_string = str(serialized_JSON.JSON_dict['date'])
            time_string = str(serialized_JSON.JSON_dict['time'])
            print(date_string)            
            print(time_string)
            
            # Read here the ID of all related records (wind_rec_id_id) as
            # primary key of main table (DataAndTimeForData model) has a
            # shifted ID with respect to the ID of the related tables.
            dict_elem_2 = WindData.objects.filter(wind_rec_id_id=id).values('wind_speed', 'wind_direction', 'wind_rec_id_id')          
            dictionary.update(dict_elem_2[0])            

            dict_elem_3 = TemperatureData.objects.filter(temp_rec_id_id=id).values(
                'temperature',
                'feels_like',
                'temperature_max',
                'temperature_min'
            )
            dictionary.update(dict_elem_3[0])

            dict_elem_4 = OtherWeatherData.objects.filter(other_rec_id=id).values(
                'pressure',
                'humidity',
                'visibility',
                'sky',
                'main',
                'description',
                'sunrise',
                'sunset'
            )
            dictionary.update(dict_elem_4[0])

            #serialized_JSON_2 = JSONData(dictionary)

            #record_to_edit_3 = serializers.serialize(
            #    "json",
            #    DataAndTimeForData.objects.filter(id=id),
            #    fields=('date', 'time')
            #)

            # Serialized string to return as JsonResponse
            # Code Institue Tutor Assistance (Scott and John) helped and suggested serialization.
            # Original code base on the following JavaScript and Django templates, accessed on March 8th, 2022:
            # Javascript: https://github.com/ShavingSeagull/TheHub/blob/master/static/js/administration.js
            # Template: https://github.com/ShavingSeagull/TheHub/blob/master/templates/administration/edit_user.html, lines 183 to 190.
            # Later built like this to merge four query sets, after investigating the format of the serialized JsonResponse
            # Using json.dumps to replace single quotation by double one
            # https://stackoverflow.com/questions/18283725/how-to-create-a-python-dictionary-with-double-quotes-as-default-quote-format
            # Accessed on March 9th, 2022, at 5:00.
            record_to_edit = '[{"model": "app_weather", "pk": ' + str(id) + \
                ', "fields": {"date": "' + date_string + '", "time": "' + \
                time_string + '", "country": "' + country + '", '+ json.dumps((dictionary))[1:] + '}]'
            for char in record_to_edit:
                if char == ''' ' ''':
                    char = ''' " '''
            
            print(record_to_edit)
            return JsonResponse(record_to_edit, safe=False)


            
            
            

            #return render(request, "weather.html", context_edit)
            #return context_edit
        
            
        ##############################################



        # Write new record
        if write_data == "true":

            print(other_value_to_display_1)
            print(other_value_to_display_2)
            print("Writing = " + write_data)

            # Indexes from 1 to -1 to delete quotation marks

            # Date and time
            value_date = json.dumps(request.POST.get('valueDate'))[1:-1]
            print("Date = " + value_date)
            value_time = json.dumps(request.POST.get('valueTime'))[1:-1]
            # Wind data
            wind_speed_data = float(json.dumps(request.POST.get(
                                               'valueWind'))[1:-1]
                                    )
            wind_direction_data = float(json.dumps(request.POST.get(
                                                   'valueWindDir'))[1:-1]
                                        )
            # Temperature data
            value_temperature = float(json.dumps(request.POST.get(
                                                 'valueTemperature'))[1:-1]
                                      )
            value_feels_like = float(json.dumps(request.POST.get(
                                                'valueFeelsLike'))[1:-1]
                                     )
            value_temperature_max = float(json.dumps(request.POST.get(
                                          'valueTemperatureMax'))[1:-1]
                                          )
            value_temperature_min = float(json.dumps(request.POST.get(
                                          'valueTemperatureMin'))[1:-1]
                                          )
            # Other weather data
            value_pressure = float(json.dumps(request.POST.get(
                                              'valuePressure'))[1:-1]
                                   )
            value_humidity = float(json.dumps(request.POST.get(
                                              'valueHumidity'))[1:-1]
                                   )
            value_visibility = json.dumps(request.POST.get(
                                          'valueVisibility'))[1:-1]
            value_clouds = float(json.dumps(request.POST.get(
                                            'valueClouds'))[1:-1]
                                 )
            value_main = json.dumps(request.POST.get('valueMain'))[1:-1]
            value_description = json.dumps(request.POST.get(
                                           'valueDescription'))[1:-1]
            value_country = json.dumps(request.POST.get('valueCountry'))[1:-1]
            value_sunrise = json.dumps(request.POST.get('valueSunrise'))[1:-1]
            value_sunset = json.dumps(request.POST.get('valueSunset'))[1:-1]

            # To count records in a database table:
            # https://stackoverflow.com/questions/15635790/how-to-count-the-number-of-rows-in-a-database-table-in-django,
            # accessed on January 22nd, at 18:47.
            total_recs = DataAndTimeForData.objects.filter().count()

            if records_to_display == "5-last":
                recs = 5
            elif records_to_display == "15-last":
                recs = 15
            else:
                recs = total_recs

            try:
                record = DataAndTimeForData(date=value_date, time=value_time)
                record.save()
                pk = record.id

                record = WindData(wind_rec_id_id=pk,
                                  wind_speed=wind_speed_data,
                                  wind_direction=wind_direction_data)
                record.save()

                record = TemperatureData(temp_rec_id_id=pk,
                                         temperature=value_temperature,
                                         feels_like=value_feels_like,
                                         temperature_max=value_temperature_max,
                                         temperature_min=value_temperature_min)
                record.save()

                record = OtherWeatherData(other_rec_id=pk,
                                          pressure=value_pressure,
                                          humidity=value_humidity,
                                          visibility=value_visibility,
                                          sky=value_clouds,
                                          main=value_main,
                                          description=value_description,
                                          sunrise=value_sunrise,
                                          sunset=value_sunset)
                record.save()
                print("Try with AJAX")

            except:
                print("An exception related to AJAX posting data occurred")


        # Update record
        if write_data == "update":
            
            id_to_update = int(json.dumps(request.POST.get('idToUpdate'))[1:-1])
            print (id_to_update)

            # Read input fields in edition panel

            # Indexes from 1 to -1 to delete quotation marks

            # Date and time
            value_date = json.dumps(request.POST.get('valueDate'))[1:-1]
            print("Date = " + value_date)
            value_time = json.dumps(request.POST.get('valueTime'))[1:-1]
            # Wind data
            wind_speed_data = float(json.dumps(request.POST.get(
                                               'valueWind'))[1:-1]
                                    )
            wind_direction_data = float(json.dumps(request.POST.get(
                                                   'valueWindDir'))[1:-1]
                                        )
            # Temperature data
            value_temperature = float(json.dumps(request.POST.get(
                                                 'valueTemperature'))[1:-1]
                                      )
            value_feels_like = float(json.dumps(request.POST.get(
                                                'valueFeelsLike'))[1:-1]
                                     )
            value_temperature_max = float(json.dumps(request.POST.get(
                                          'valueTemperatureMax'))[1:-1]
                                          )
            value_temperature_min = float(json.dumps(request.POST.get(
                                          'valueTemperatureMin'))[1:-1]
                                          )
            # Other weather data
            value_pressure = float(json.dumps(request.POST.get(
                                              'valuePressure'))[1:-1]
                                   )
            value_humidity = float(json.dumps(request.POST.get(
                                              'valueHumidity'))[1:-1]
                                   )
            value_visibility = json.dumps(request.POST.get(
                                          'valueVisibility'))[1:-1]
            value_clouds = float(json.dumps(request.POST.get(
                                            'valueClouds'))[1:-1]
                                 )
            value_main = json.dumps(request.POST.get('valueMain'))[1:-1]
            value_description = json.dumps(request.POST.get(
                                           'valueDescription'))[1:-1]
            value_country = json.dumps(request.POST.get('valueCountry'))[1:-1]
            value_sunrise = json.dumps(request.POST.get('valueSunrise'))[1:-1]
            value_sunset = json.dumps(request.POST.get('valueSunset'))[1:-1]

            # Update records
            try:
                WindData.objects.filter(wind_rec_id_id=id_to_update).update(wind_speed=wind_speed_data)
                WindData.objects.filter(wind_rec_id_id=id_to_update).update(wind_speed=wind_speed_data)
                TemperatureData.objects.filter(temp_rec_id_id=id_to_update).update(temperature=value_temperature)
                TemperatureData.objects.filter(temp_rec_id_id=id_to_update).update(feels_like=value_feels_like)
                TemperatureData.objects.filter(temp_rec_id_id=id_to_update).update(temperature_max=value_temperature_max)
                TemperatureData.objects.filter(temp_rec_id_id=id_to_update).update(temperature_min=value_temperature_min)
                OtherWeatherData.objects.filter(other_rec_id=id_to_update).update(pressure=value_pressure)
                OtherWeatherData.objects.filter(other_rec_id=id_to_update).update(humidity=value_humidity)
                OtherWeatherData.objects.filter(other_rec_id=id_to_update).update(visibility=value_visibility)
                OtherWeatherData.objects.filter(other_rec_id=id_to_update).update(sky=value_clouds)
                OtherWeatherData.objects.filter(other_rec_id=id_to_update).update(main=value_main)
                OtherWeatherData.objects.filter(other_rec_id=id_to_update).update(description=value_description)
                OtherWeatherData.objects.filter(other_rec_id=id_to_update).update(sunrise=value_sunrise)
                OtherWeatherData.objects.filter(other_rec_id=id_to_update).update(sunset=value_sunset)

            except:
                print("An exception related to AJAX posting data occurred")


        # Delete record
        if write_data == "deletion":
        #if json.dumps(request.POST.get('deletionMode'))[1:-1]:
            
            id_to_delete = int(json.dumps(request.POST.get('idToDelete'))[1:-1])
            print("Will DELETE")
            print (id_to_delete)
            
            DataAndTimeForData.objects.filter(id=id_to_delete).delete()
            WindData.objects.filter(wind_rec_id_id=id_to_delete).delete()
            TemperatureData.objects.filter(temp_rec_id_id=id_to_delete).delete()
            OtherWeatherData.objects.filter(other_rec_id=id_to_delete).delete()


    try:
        other_weather_data = zip(
                                 DataAndTimeForData.objects.all().order_by(
                                     '-id')[0:recs],
                                 OtherWeatherData.objects.values_list(
                                     other_value_to_display_1,
                                     other_value_to_display_2,
                                     'other_rec').order_by(
                                         '-id')[0:recs],
                                
                                )
        
    except:
        other_value_to_display_1 = str(json.dumps(request.POST.get(
                                                  'otherValueToDisplay1')
                                                  )[1:-1])
        other_value_to_display_2 = str(json.dumps(request.POST.get(
                                                  'otherValueToDisplay2')
                                                  )[1:-1])
        other_weather_data = zip(
                                 DataAndTimeForData.objects.all().order_by(
                                     '-id')[0:recs],
                                 OtherWeatherData.objects.values_list(
                                     other_value_to_display_1,
                                     other_value_to_display_2,
                                     'other_rec_id').order_by(
                                         '-id')[0:recs],
                                 )
        print("An exception outside AJAX related to posting data occurred")

    
    print("BEFORE CONTEXT")
    


    context = {
            'edition': False,
            'date_and_time': DataAndTimeForData.objects.all().order_by(
                '-id'
                )[0:recs],
            'wind_data': WindData.objects.all().order_by('-id')[0:recs],
            'temperature_data': TemperatureData.objects.all().order_by(
                '-id'
                )[0:recs],
            'other_weather_data': other_weather_data,
            'other_value_to_display_1': other_value_to_display_1.capitalize(),
            'other_value_to_display_2': other_value_to_display_2.capitalize()
    }

    return render(request, "weather.html", context)



#def edit_record(request, id_of_record):
#
#    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
#        # Returns a JSON dataset of the selected user, with only the necessary fields that can be edited
#        record_ = serializers.serialize(
#            "json", 
#            WindData.objects.filter(wind_rec_id_id=id_of_record),
#            fields=('wind_speed', 'wind_direction')
#        )
#        return JsonResponse(user, safe=False)
