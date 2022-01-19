###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.test import TestCase
from django.db import models
from datetime import datetime

# INTERNAL:
import unittest
from .forms import CommentForm
from .models import Post, Comment

###############################################################################


# Create your tests here.


class TestCommentForm(unittest.TestCase):
    """
    Class for testing the contact form
    """

    
    def setUp(self):
        print("setUp")
        self.test_form_data_to_test = Comment(            
            False,            
            True,
            'Jkl',
            'Ghi@ghi.com',
            'Body text of comment'
        )

    def tearDown(self):
        print("tearDown")


    def test_name_in_comment(self):
        print("Testing name in comment")
        self.assertEqual(self.test_form_data_to_test.name, 'Jkl')

    def test_email_in_comment(self):
        print("Testing email in comment")
        self.assertEqual(self.test_form_data_to_test.email, 'Ghi@ghi.com')

    def test_body_in_comment(self):
        print("Testing body in comment")
        self.assertEqual(self.test_form_data_to_test.body,
                         'Body text of comment'
                         )


if __name__ == '__main__':
    unittest.main()
