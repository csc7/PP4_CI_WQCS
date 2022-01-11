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
    
    def setUp(self):
        """
        This function creates a record for testing
        """
        test_form = DataFromContactForm(
            date = '2000-01-01',
            time = '00:00:00',
            name = 'Abc',
            surname = 'Def',
            email = 'Ghi@ghi.com',
            description = 'Test description'
        )
        test_form.save()

    def tearDown(self):
        """
        This functions deletes the record after testing
        """
        DataFromContactForm.objects.all().delete()
        

    def test_name_in_form(self):
        """
        This functions tests the contact form
        """
        test_form = DataFromContactForm.objects.get(name='Abc')
        model_form = DataFromContactForm.objects.get(name=test_form)
        self.assertEqual(str(model_form), model_form.name)


if __name__ == '__main__':
    unittest.main()