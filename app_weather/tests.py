###############################################################################
"""
Django tests for the Weather app
"""
# IMPORTED RESOURCES #

# EXTERNAL:
from django.test import TestCase
from django.db import models
from datetime import datetime

# INTERNAL:
import unittest
from .models import DataAndTimeForData, WindData
from .models import TemperatureData, OtherWeatherData

###############################################################################


class TestWeatherApp(unittest.TestCase):
    """
    Class for testing the contact form
    """

    def setUp(self):
        print("setUp")
        self.test_data_for_date_and_time = DataAndTimeForData(
            '2000-01-01',
            '00:00:00'
        )
        self.test_data_for_wind_data = WindData(
            100,  # id
            100,  # foreign key
            '20.0',
            '90'
        )
        self.test_data_for_temperature_data = TemperatureData(
            100,  # id
            100,  # foreign key
            '240',
            '260',
            '200',
            '300'
        )
        self.test_data_for_other_weather_data = OtherWeatherData(
            100,  # id
            100,  # foreign key
            '1000',
            '90',
            '10000',
            '100',
            'Clouds',
            'broken clouds',
            '7:00:00',
            '19:00:00'
        )

    def tearDown(self):
        print("tearDown")

    def test_date_and_time_class_return(self):
        print("Testing class return in date and time data")
        self.assertEqual(str(self.test_data_for_date_and_time),
                         'Date: 00:00:00; time: 00:00:00'
                         )

    def test_time_in_test_date_and_time_model(self):
        print("Testing time in date and time data")
        self.assertEqual(self.test_data_for_date_and_time.time, '00:00:00')

    def test_wind_data_class_return(self):
        print("Testing class return in wind data")
        self.assertEqual(str(self.test_data_for_wind_data),
                         'Wind speed: 20.0; wind dir:90'
                         )

    def test_speed_in_wind_data_model(self):
        print("Testing wind speed")
        self.assertEqual(self.test_data_for_wind_data.wind_speed, '20.0')

    def test_direction_in_wind_data_model(self):
        print("Testing wind direction")
        self.assertEqual(self.test_data_for_wind_data.wind_direction, '90')

    def test_temperature_data_class_return(self):
        print("Testing class return in temperature data")
        self.assertEqual(str(self.test_data_for_temperature_data),
                         'Temperature: 240'
                         )

    def test_temperature_in_temperature_data_model(self):
        print("Testing temperature")
        self.assertEqual(self.test_data_for_temperature_data.temperature,
                         '240'
                         )

    def test_feels_like_in_temperature_data_model(self):
        print("Testing feels like")
        self.assertEqual(self.test_data_for_temperature_data.feels_like,
                         '260'
                         )

    def test_temp_max_in_temperature_data_model(self):
        print("Testing feels like")
        self.assertEqual(self.test_data_for_temperature_data.temperature_max,
                         '200'
                         )

    def test_temp_min_in_temperature_data_model(self):
        print("Testing feels like")
        self.assertEqual(self.test_data_for_temperature_data.temperature_min,
                         '300'
                         )

    def test_other_weather_data_class_return(self):
        print("Testing class return in other weather data")
        self.assertEqual(str(self.test_data_for_other_weather_data),
                         'Other weather data'
                         )

    def test_pressure(self):
        print("Testing pressure")
        self.assertEqual(self.test_data_for_other_weather_data.pressure,
                         '1000'
                         )

    def test_humidity(self):
        print("Testing humidity")
        self.assertEqual(self.test_data_for_other_weather_data.humidity,
                         '90'
                         )

    def test_visibility(self):
        print("Testing visibility")
        self.assertEqual(self.test_data_for_other_weather_data.visibility,
                         '10000'
                         )

    def test_sky(self):
        print("Testing sky")
        self.assertEqual(self.test_data_for_other_weather_data.sky, '100')

    def test_main(self):
        print("Testing main information")
        self.assertEqual(self.test_data_for_other_weather_data.main, 'Clouds')

    def test_description(self):
        print("Testing description")
        self.assertEqual(self.test_data_for_other_weather_data.description,
                         'broken clouds'
                         )

    def test_sunrise(self):
        print("Testing sunrise")
        self.assertEqual(self.test_data_for_other_weather_data.sunrise,
                         '7:00:00'
                         )

    def test_sunset(self):
        print("Testing sunset")
        self.assertEqual(self.test_data_for_other_weather_data.sunset,
                         '19:00:00'
                         )


if __name__ == '__main__':
    unittest.main()
