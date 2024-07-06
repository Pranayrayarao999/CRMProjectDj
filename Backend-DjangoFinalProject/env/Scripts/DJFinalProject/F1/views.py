from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import response
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.decorators import action

from .models import CreateNewLead
from .serializers import CreateNewLeadSerializer

from rest_framework.authentication import BasicAuthentication     #this will not allow if you are not loggedin - BASIC/NORMAL AUTH
from rest_framework.permissions import IsAuthenticated            #this checks the authentication whether user or not
from rest_framework.authentication import SessionAuthentication

from django.contrib.auth.decorators import login_required

# Create your views here.
# @login_required                  #ONLY LOGIN PEOPLE CAN DO EVERYTHING
class CreateNewLeadViewSet(viewsets.ModelViewSet):

    #CRUD OPERATIONS - CREATE,READ,UPDATE AND DELETE (LEAD DATA) 
    queryset = CreateNewLead.objects.all()
    serializer_class = CreateNewLeadSerializer

    # AUTHENTICATION PURPOSE
    #authentication_classes = [BasicAuthentication]    #Passed in list because for future authentication, You can pass it normally BasicAuthentication  
    # SessionAuth is for SIMILAR TO BASIC AUTHENTICATION
    #authentication_classes = [SessionAuthentication]
    #permission_classes = [IsAuthenticated]

    # CRUD(DELETE)
    def destroy(self, request, pk=None):
        
        instance = self.get_object()
        instance.delete()

        return response.Response({'messsage':"Record delete successfully"},status=HTTP_204_NO_CONTENT)
    
    # pip install django-filter  -- TYPES THIS COMMAND IN CMD
    # TO RETRIEVE LEAD_STATUS:OPPORTUNITY/REGISTERED/WARMLEADS
    # http://127.0.0.1:3000/api/leads/?status=Registered
    def get_queryset(self):
        queryset = super().get_queryset()
        status =self.request.query_params.get('status',None)

        if status is not None:
            queryset = queryset.filter(lead_status=status)
        return queryset
    
    # COUNT OF STATUS OPPORTUNITY 
    # http://127.0.0.1:3000/api/leads/opportunity_count
    @action(detail=False, methods=['get'])               # Action - for getting the request, detail=false means to get all data, method is get
    def opportunity_count(self,request):
        count = CreateNewLead.objects.filter(lead_status='Opportunity').count()
        return Response({'Opportunity Count': count})

    # COUNT OF STATUS WARMLEAD
    # http://127.0.0.1:3000/api/leads/warmlead_count
    @action(detail=False, methods=['get'])
    def warmlead_count(self,request):
        count = CreateNewLead.objects.filter(lead_status='WarmLead').count()
        return Response({'WarmLead Count': count})

    # COUNT OF STATUS ATTEMPTED
    # http://127.0.0.1:3000/api/leads/attempted_count
    @action(detail=False, methods=['get'])
    def attempted_count(self,request):
        count = CreateNewLead.objects.filter(lead_status='Attempted').count()
        return Response({'AttemptedLead Count': count})

    # COUNT OF ALL LEADS
    # http://127.0.0.1:3000/api/leads/alllead_count
    @action(detail=False, methods=['get'])
    def alllead_count(self,request):
        count = CreateNewLead.objects.all().count()
        return Response({'TOTAL LEADS COUNT': count})


    


