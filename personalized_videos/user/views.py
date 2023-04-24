from django.shortcuts import render

# Create your views here.
def index(request):
    templatename='index/index.html'
    context={}
    return render(request, templatename, context)