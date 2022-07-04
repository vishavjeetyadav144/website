from django.shortcuts import render
from django.shortcuts import redirect
from .forms import loginForm,feedbackForm,signupForm
from .models import feedback,userdata,userdetails
from django.db import connection
cursor = connection.cursor()
from django.http import HttpResponseRedirect

def homepage(request):
    try:
        return render(request,'index.html',{'i':'in','user':request.session['user']})
    except KeyError:
        return render(request,'index.html',{'i':'out'})


def loginpage(request):
    if request.method=='POST':
        name=request.POST.get('username')
        password=request.POST.get('password')
        query = "SELECT * FROM app_userdata WHERE username="+"'"+name+"'"
        cursor.execute(query)
        credential=cursor.fetchone()
        if credential==None :
            form = loginForm()
            return render(request,'login.html',{'form':form,'error':'Incorrect username or password '})
        else:
            if credential[2]==password:
                request.session['user'] = credential[1]
                return render(request,'index.html',{'i':'in','user':request.session['user']})
            else:
                form = loginForm()
                return render(request,'login.html',{'form':form,'error':'Incorrect username or password '})
    else:
        form = loginForm()
        return render(request,'login.html',{'form':form})
def logout(request):
    try:
        del request.session['user']
    except KeyError:
        pass
    return HttpResponseRedirect("home")

def signuppage(request):
    if request.method=='POST':
        username=request.POST.get('username')
        query = "SELECT * FROM app_userdata WHERE username="+"'"+username+"'"
        cursor.execute(query)
        credential=cursor.fetchone()
        if credential==None:
            details=userdetails()
            details.first_name=request.POST.get('first_name')
            details.last_name=request.POST.get('last_name')
            details.username=request.POST.get('username')
            details.password=request.POST.get('password')
            details.number=request.POST.get('number')
            details.email=request.POST.get('email')
            details.gender=request.POST.get('gender')
            details.address=request.POST.get('address')
            details.postal_code=request.POST.get('postal_code')
            details.city=request.POST.get('city')
            details.state=request.POST.get('state')
            details.country=request.POST.get('country')
            details.save()
            user=userdata()
            user.username=request.POST.get('username')
            user.password=request.POST.get('password')
            user.save()
            request.method='GET'

            return HttpResponseRedirect('home')

        else:
            form=signupForm()
            check= 'username already exist'
            request.method='GET'
            return render(request,'loginform.html',{'form':form,'usercheck':check})
    else:
        form=signupForm()
        return render(request,'loginform.html',{'form':form})
def demopage(request):
    return render(request,'demo.html')


def blogpage(request):
    return render(request,'blog.html')



def aboutpage(request):
    if request.method=='POST':
        person=feedback()
        person.name=request.POST.get('name')
        person.email=request.POST.get('email')
        person.number=request.POST.get('number')
        person.subject=request.POST.get('subject')
        person.message=request.POST.get('message')
        person.save()
        return HttpResponseRedirect('home')
    else:
        form = feedbackForm()
        return render(request,'about.html',{'form':form})
