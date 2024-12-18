"""
URL configuration for DJFinalProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path,include
# LOGIN BY USING CREATESUPERUSER USERNAME AND PASSWORD
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('F1.urls')),
    # AUTHENTICATION (SIGNUP AND LOGIN)
    path('Auth/',include('Auth1.urls')),

    # path('User/',include('A1.urls')),

    #path('Auth/', include('rest_framework.urls')),   #for Auth(login purpose), it makes changes in admin portal , left side login,logout (NOT WORKING)
    path('token/',obtain_auth_token),   #LOGIN, TOKEN BECAUSE OF THIS
    
    

]
