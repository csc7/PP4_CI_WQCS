#####from django.shortcuts import render
#####
###### Create your views here.
#####
#####def get_contact_page(request):
#####    return render(request, "contact.html")


#https://docs.djangoproject.com/en/4.0/topics/forms/

from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import ContactForm

def get_contact_page(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = ContactForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            print(form.cleaned_data)
            # ...
            # redirect to a new URL:

            return HttpResponseRedirect('/thanks/')
            

    # if a GET (or any other method) we'll create a blank form
    else:
        form = ContactForm()
    
    

    return render(request, 'contact.html', {'form': form})


def get_thanks_page(request):
    return render(request, "thanks.html")