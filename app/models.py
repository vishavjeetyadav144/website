from django.db import models


class userdata(models.Model):
    username= models.CharField(max_length=100)
    password= models.CharField(max_length=100)


class feedback(models.Model):
    name = models.CharField( max_length=100)
    number = models.IntegerField()
    email = models.EmailField( max_length=100)
    subject = models.IntegerField()
    message = models.CharField(max_length=10000)

class userdetails(models.Model):
    first_name=models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    number = models.IntegerField()
    email = models.EmailField(max_length=100)
    gender = models.IntegerField()
    address= models.CharField(max_length=100)
    postal_code=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    country=models.CharField(max_length=100)
