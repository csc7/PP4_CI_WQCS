from django.shortcuts import render

# Create your views here.
def get_index(request):
    return render(request, "pp4_ci_wqcs/index.html")