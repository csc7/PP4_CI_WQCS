from django.test import TestCase

from django.db import models

import unittest


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





class TestForm (models.Model):
    date = models.DateField(max_length=200)
    time = models.TimeField(default="00:00:00", max_length=200)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    description = models.CharField(max_length=2000)


if __name__ == '__main__':
    unittest.main()