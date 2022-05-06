###############################################################################
"""
Django views for the Instructions app
"""
# IMPORTED RESOURCES #

# EXTERNAL:
from django.shortcuts import render

# INTERNAL:


###############################################################################


# Create your views here.


def get_instructions_page(request):
    """
    View for Instruction Page/App

    Parameters In: HTTP request object

    Parameters Out: index.html (Instructions page)

    """
    return render(request, "index.html")
