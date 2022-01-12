from django.test import TestCase

from django.db import models

import unittest

from datetime import datetime


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
            'name' : 'Abc',
            'surname' : 'Def',
            'email' : 'Ghi@ghi.com',
            'text_content' : 'Test description'
        }
        test_form = ContactForm(test_form_data)
        self.assertTrue(test_form.is_valid())


    def test_name_in_contact_form(self):
        # Get date in Python, copied on January 12th, 2022, at 18:40, from
        # https://stackoverflow.com/questions/32490629/getting-todays-date-in-yyyy-mm-dd-in-python
        test_form_data_to_test = DataFromContactForm(datetime.today().strftime('%d-%m-%Y'), '00:00:00', 'Abc', 'Def', 'Ghi@ghi.com', 'Text in description')
        print("asdfasdf")
        print(test_form_data_to_test)
        self.assertEqual(test_form_data_to_test.name, 'Def')


if __name__ == '__main__':
    unittest.main()