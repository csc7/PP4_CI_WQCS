#####from django.shortcuts import render
#####
###### Create your views here.
#####
#####def get_contact_page(request):
#####    return render(request, "contact.html")
import datetime
from .models import DataFromContactForm


#https://docs.djangoproject.com/en/4.0/topics/forms/

from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import ContactForm

def get_contact_page(request):

    print(datetime.datetime.now().date())
    print(datetime.datetime.now().time())

    
    #record = DataFromContactForm(date = value_date, time=value_time)
    #record.save()

    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = ContactForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            print(form.cleaned_data)
            record = DataFromContactForm(date = datetime.datetime.now().date(),
                                         time = datetime.datetime.now().time(),
                                         name = form.cleaned_data['name'],
                                         surname = form.cleaned_data['surname'],
                                         email = form.cleaned_data['email'],
                                         description = form.cleaned_data['text_content']
                                        )
            record.save()
            # redirect to a new URL:

            return HttpResponseRedirect('/thanks/')
            

    # if a GET (or any other method) we'll create a blank form
    else:
        form = ContactForm()
    
    return render(request, 'contact.html', {'form': form})


def get_thanks_page(request):
    context = {
                'form_data': DataFromContactForm.objects.all().order_by('-id')[0]
              }   
    return render(request, "thanks.html", context)