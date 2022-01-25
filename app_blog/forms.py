###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django import forms

# INTERNAL:
from .models import Comment

###############################################################################


# Code copied from Code Institute "I Think Therefore I Blog" project
# on December 23rd, 2022 at 15:17


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('body',)
