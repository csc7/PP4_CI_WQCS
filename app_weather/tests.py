###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.test import TestCase
from django.db import models
from datetime import datetime

# INTERNAL:
import unittest
from .models import DataAndTimeForData, WindData, TemperatureData, OtherWeatherData

###############################################################################


# Create your tests here.



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
            20.0,
            90
        )
        self.test_data_for_temperature_data = TemperatureData(            
            24,
            26,
            20,
            30
        )
        self.test_data_for_other_weather_data = OtherWeatherData(            
            1000,
            90,
            10000,
            100,
            'Clouds',
            'broken clouds',
            '7:00:00',
            '19:00:00'
        )

    def tearDown(self):
        print("tearDown")

    def test_date_and_time_class_return(self):
        print("Testing class return in comment")
        self.assertEqual(str(self.test_data_for_date_and_time), 'Date: 00:00:00; time: 00:00:00')

    def test_time_in_test_date_and_time_model(self):
        print("Testing name in comment")
        self.assertEqual(self.test_data_for_date_and_time.time, '00:00:00')

if __name__ == '__main__':
    unittest.main()

