from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import response
from django.contrib.auth import authenticate, login
from django.contrib import messages

from .models import Authorize
from .AuthSerializers import CreateAdminSerializer

# AUTHENTICATION PURPOSE
from rest_framework.authentication import BasicAuthentication     #this will not allow if you are not loggedin - BASIC/NORMAL AUTH
from rest_framework.permissions import IsAuthenticated           #this checks the authentication whether user or not
from rest_framework.permissions import IsAdminUser               #Only admins can use , gives permission only for admins(only superuser)
from rest_framework.authentication import SessionAuthentication   #this to enable logout button in other than admin page
#IF YOU WANT GLOBAL AUTHENTICATION FOR ENTIRE ADD IN SETTINGS.PY AND REMOVE IN VIEWS.PY

# LOGOUT IMPORTS
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

#After adding basicauth and isauth runthe server, open admin and refresh you can see ur name on left side.

class CreateNewUserViewSet(viewsets.ModelViewSet):

    queryset = Authorize.objects.all()
    serializer_class = CreateAdminSerializer
    #authentication_classes = [BasicAuthentication]    #Passed in list because for future authentication, You can pass it normally BasicAuthentication  
    
    # SessionAuth is for SIMILAR TO BASIC AUTHENTICATION
    # authentication_classes = [SessionAuthentication]
    # permission_classes = [IsAuthenticated]
    # permission_classes = [IsAdminUser]


class LogoutView(APIView):
    # permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            token = Token.objects.get(user=request.user)
            token.delete()
            return Response("TOKEN DELETED",status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response("TOKEN DOSENT EXIST",status=status.HTTP_400_BAD_REQUEST)





















#NO USE OF THIS PAGE -- NO USE 
