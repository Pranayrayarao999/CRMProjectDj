from django.shortcuts import render
from Auth1.models import User
from rest_framework.views import APIView
from Auth1.serializers import UserRegistrationSerializer,LoginSerializers
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate,login
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class RegistrationView(APIView):
    def post(self,request):
        serializer=UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':"Registration successfull"},status=status.HTTP_201_CREATED)
        return Response(serializer.errors)

class LoginView(APIView):
    def post(self,request):
        serializer=LoginSerializers(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data["email"]
            password=serializer.validated_data["password"]
            user=authenticate(email=email,password=password)
            if user is not None:   
                login(request,user)
                refresh = RefreshToken.for_user(user)
                return Response( {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'msg':'login successfull'
                    })

            return Response({'msg':'invalid credential'})
        return Response(serializer.errors)   
