###############################################################################

# IMPORTED RESOURCES #

# EXTERNAL:
from django.shortcuts import render

# INTERNAL:


###############################################################################


# Create your views here.


def get_instructions_page(request):
    """
    View for Instruction Page/App
    """
    return render(request, "index.html")
