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
        self.test_data_for_comment = Comment(            
            False,            
            True,
            'Jkl',
            'Ghi@ghi.com',
            'Body text of comment'
        )
        self.test_data_for_post = Post(            
            'postpost',
            'Title',
            'slug-example',
            100,
            'placeholder',
            True,
            True,
            'post content',
            True,
            0
        )

    def tearDown(self):
        print("tearDown")

    def test_comment_class_return(self):
        print("Testing class return in comment")
        self.assertEqual(str(self.test_data_for_comment), 'Comment Body text of comment by Jkl')

    def test_name_in_comment(self):
        print("Testing name in comment")
        self.assertEqual(self.test_data_for_comment.name, 'Jkl')

    def test_email_in_comment(self):
        print("Testing email in comment")
        self.assertEqual(self.test_data_for_comment.email, 'Ghi@ghi.com')

    def test_body_in_comment(self):
        print("Testing body in comment")
        self.assertEqual(self.test_data_for_comment.body,
                         'Body text of comment'
                         )
    def test_post_class_return(self):
        print("Testing class return in post")
        self.assertEqual(str(self.test_data_for_post), 'Title')
    
    def test_slug_in_post(self):
        print("Testing slug in comment")
        self.assertEqual(self.test_data_for_post.slug, 'slug-example')

    def test_author_in_post(self):
        print("Testing slug in comment")
        self.assertEqual(self.test_data_for_post.content, 'post content')

if __name__ == '__main__':
    unittest.main()
