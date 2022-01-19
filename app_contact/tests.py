from django.test import TestCase

from django.db import models

import unittest

from datetime import datetime
#import time

from .forms import ContactForm
from .models import DataFromContactForm

# Create your tests here.

class TestContactForm(unittest.TestCase):
    """
    Class for testing the contact form
    """
    
    def test_contact_form(self):
        """
        This function creates a record for testing the form
        """
        test_form_data = {       
            'name' : 'Jkl',
            'surname' : 'Mno',
            'email' : 'Ghi@ghi.com',
            'text_content' : 'Test description'
        }
        test_form = ContactForm(test_form_data)
        self.assertTrue(test_form.is_valid())


    def setUp(self):
        print("setUp")
        self.test_form_data_to_test = DataFromContactForm(
            datetime(2022, 1, 14),
            "22:22:22",
            'Abc',
            'Def',
            'Ghi@ghi.com',
            'Text in description'
        )

    def tearDown(sefl):
        print("tearDown")


    def test_name_in_contact_form(self):
        # Get date in Python, copied on January 12th, 2022, at 18:40, from
        # https://stackoverflow.com/questions/32490629/getting-todays-date-in-yyyy-mm-dd-in-python
        #test_form_data_to_test = DataFromContactForm(datetime(2022, 1, 14), "22:22:22", 'Abc', 'Def', 'Ghi@ghi.com', 'Text in description')
        #print(test_form_data_to_test.date)
        print(datetime.today().strftime('%b-%m-%y'))
        #print(test_form_data_to_test)
        self.assertEqual(self.test_form_data_to_test.name, 'Def')


    def test_surname_in_contact_form(self):
        # Get date in Python, copied on January 12th, 2022, at 18:40, from
        # https://stackoverflow.com/questions/32490629/getting-todays-date-in-yyyy-mm-dd-in-python
        #test_form_data_to_test = DataFromContactForm(datetime.today().strftime('%b-%d-%y'), '00:00:00', 'Abc', 'Def', 'Ghi@ghi.com', 'Text in description')
        self.assertEqual(self.test_form_data_to_test.time, 'Abc')


    def test_email_in_contact_form(self):
        # Get date in Python, copied on January 12th, 2022, at 18:40, from
        # https://stackoverflow.com/questions/32490629/getting-todays-date-in-yyyy-mm-dd-in-python
        #test_form_data_to_test = DataFromContactForm(datetime.today().strftime('%d-%m-%Y'), '00:00:00', 'Abc', 'Def', 'Ghi@ghi.com', 'Text in description')
        self.assertEqual(self.test_form_data_to_test.surname, 'Ghi@ghi.com')


    def test_description_in_contact_form(self):
        # Get date in Python, copied on January 12th, 2022, at 18:40, from
        # https://stackoverflow.com/questions/32490629/getting-todays-date-in-yyyy-mm-dd-in-python
        #test_form_data_to_test = DataFromContactForm(datetime.today().strftime('%d-%m-%Y'), '00:00:00', 'Abc', 'Def', 'Ghi@ghi.com', 'Text in description')
        self.assertEqual(self.test_form_data_to_test.email, 'Text in description')

if __name__ == '__main__':
    unittest.main()

