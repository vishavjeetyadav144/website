from django.conf.urls import url,include
from app import views

urlpatterns=[

    url(r'^auth/', include('social_django.urls', namespace='social')),
    url(r'^$',views.homepage,name= ''),
    url(r'^home$',views.homepage,name= 'home'),
    url(r'^login$',views.loginpage,name= 'login'),
    url(r'^logout$',views.logout,name= 'logout'),
    url(r'^signup$',views.signuppage,name= 'signup'),
    url(r'^demo$',views.demopage,name= 'demo'),
    url(r'^blog$',views.blogpage,name= 'blog'),
    url(r'^about$',views.aboutpage,name= 'login')
]
