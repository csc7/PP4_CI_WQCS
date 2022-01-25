###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.shortcuts import render
import json
import re
from itertools import chain

# INTERNAL:
from .models import DataAndTimeForData, WindData
from .models import TemperatureData, OtherWeatherData

###############################################################################


from django.views.decorators.csrf import csrf_exempt


recs = 5
other_value_to_display_1 = 'pressure'
other_value_to_display_2 = 'sky'


@csrf_exempt
def get_weather_page(request):
    """
    Views for Weather Page/App and Processing of weather data
    from OpenWeatherMap App
    """

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

        # Write new record
        if write_data == "true":
            print("Writing = " + write_data)

            # Indexes from 1 to -1 to delete quotation marks

            # Date and time
            value_date = json.dumps(request.POST.get('valueDate'))[1:-1]
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

    try:
        other_weather_data = zip(
                                 DataAndTimeForData.objects.all().order_by(
                                     '-id')[0:recs],
                                 OtherWeatherData.objects.values_list(
                                     other_value_to_display_1,
                                     other_value_to_display_2).order_by(
                                         '-id')[0:recs]
        )
        print("Try outside AJAX")
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
                                     other_value_to_display_2).order_by(
                                         '-id')[0:recs]
                                 )
        print("An exception outside AJAX related to posting data occurred")

    context = {
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
