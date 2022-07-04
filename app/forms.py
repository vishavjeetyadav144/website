from django import forms

class loginForm(forms.Form):
    username = forms.CharField(label='', max_length=100,widget=forms.TextInput(attrs={'class': "username",'placeholder':'USERNAME'}))
    password = forms.CharField(label='',widget=forms.PasswordInput(attrs={'class': "password",'placeholder':'PASSWORD'}))

class signupForm(forms.Form):
    first_name=forms.CharField(label='', max_length=100,widget=forms.TextInput(attrs={'class': "first_name",'placeholder':'FIRST NAME'}))
    last_name = forms.CharField(label='', max_length=100,
                           widget=forms.TextInput(attrs={'class': "last_name", 'placeholder': 'LAST NAME'}))

    username = forms.CharField(label='', max_length=100,
                           widget=forms.TextInput(attrs={'class': "username", 'placeholder': 'USERNAME'}))
    password=forms.CharField(label='',widget=forms.PasswordInput(attrs={'class': "password",'placeholder':'PASSWORD'}))
    confirm_password=forms.CharField(label='',widget=forms.PasswordInput(attrs={'class': "confirm_password",'placeholder':' CONFIRM PASSWORD'}))
    number = forms.CharField(label='', widget=forms.NumberInput(attrs={'class': 'phone', 'placeholder': 'PHONE NUMBER', 'required': True}))
    email = forms.EmailField(label='', max_length=100, widget=forms.TextInput(attrs={'class': 'email', 'type': 'email', 'placeholder': 'E-MAIL ADDRESS'}))
    gender = forms.ChoiceField(label='',choices=((1, ("Male")),
                                        (2, ("Female")),
                                        (3, ("Transgender"))), widget=forms.Select(attrs={'class': 'gender'}),
                               required=True)
    address=forms.CharField(label='',widget=forms.Textarea(attrs={'placeholder':' ADDRESS','class':'address','required': True}))
    postal_code=forms.CharField(label='',widget=forms.NumberInput(attrs={'class':'pcode','placeholder':'POSTAL CODE','required': True}))
    city=forms.CharField(label='',widget=forms.TextInput(attrs={'class':'city','readonly':'readonly','placeholder':'CITY'}),required=True)
    state=forms.CharField(label='',widget=forms.TextInput(attrs={'class':'state','readonly':'readonly','placeholder':'STATE'}),required=True)
    country=forms.CharField(label='',widget=forms.TextInput(attrs={'class':'country','readonly':'readonly','placeholder':'COUNTRY'}),required=True)
class feedbackForm(forms.Form):

    name= forms.CharField(label='',max_length=100,widget=forms.TextInput(attrs={'class':'name','placeholder':'Name','required': True}))
    number= forms.CharField(label='',widget=forms.NumberInput(attrs={'class':'phone','placeholder':'Phone Number','required': True}))
    email=forms.EmailField(label='',max_length=100,widget=forms.TextInput(attrs={'class':'email','type': 'email','placeholder': 'E-mail address'}))
    subject=forms.ChoiceField(label="", choices=(('',('Subject line')),(1, ("I'd like to start a question")),
             (2, ("I'd like to start a project")),
             (3, ("I'd like to make a proposal"))),widget=forms.Select(attrs={'class':'subject'}),required=True)
    message=forms.CharField(label='',widget=forms.Textarea(attrs={'placeholder':' Message','class':'message','required': True}))
