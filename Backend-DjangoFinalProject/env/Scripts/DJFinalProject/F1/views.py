from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework import response
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.decorators import action

from rest_framework import filters, generics
from rest_framework.generics import ListAPIView
from django_filters.rest_framework import DjangoFilterBackend


from .models import CreateNewLead
from .serializers import CreateNewLeadSerializer
from django.utils import timezone
from datetime import datetime
from datetime import timedelta
from datetime import date


from rest_framework.authentication import BasicAuthentication     #this will not allow if you are not loggedin - BASIC/NORMAL AUTH
from rest_framework.permissions import IsAuthenticated            #this checks the authentication whether user or not
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth.decorators import login_required

# csv
import csv
# Excel
from openpyxl import Workbook
from io import BytesIO



# Create your views here.
# @login_required                  #ONLY LOGIN PEOPLE CAN DO EVERYTHING
class CreateNewLeadViewSet(viewsets.ModelViewSet):
    #FILTERING (SEARCH) -- SEARCH BY NAME,EMAIL,CONTACTNO,DATE (You can see filter option in admin because of this)
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'email','contact_no','date']

    #CRUD OPERATIONS - CREATE,READ,UPDATE AND DELETE (LEAD DATA) 
    queryset = CreateNewLead.objects.all()
    serializer_class = CreateNewLeadSerializer

    # AUTHENTICATION PURPOSE
    #authentication_classes = [BasicAuthentication]            #Passed in list because for future authentication, You can pass it normally BasicAuthentication  
    # SessionAuth is for SIMILAR TO BASIC AUTHENTICATION
    #authentication_classes = [SessionAuthentication]
    #permission_classes = [IsAuthenticated]

    # CRUD(DELETE)
    def destroy(self, request, pk=None):
        
        instance = self.get_object()
        instance.delete()

        return response.Response({'messsage':"Record delete successfully"},status=HTTP_204_NO_CONTENT)
    
    # TO DISPLAY ONLY TODAYS LEADS DATA
    # def TodayData_Lead(self):
    #     today = datetime.date.today().year
    #     todays_records = CreateNewLead.objects.filter(date=today)
    #     return Response('TODAYS TOTAL DATA :', todays_records,status=HTTP_204_NO_CONTENT)
    
    # # # TO DISPLAY ONLY YESTERDAY LEAD DATA
    # def YesterdayData_Lead(self,request):
    #     yesterday = timezone.now().date() - timedelta(1)
    #     yesterdays_records = CreateNewLead.objects.filter(date=yesterday)
    #     return Response('YESTERDAY TOTAL DATA :', yesterdays_records,status=HTTP_204_NO_CONTENT)
    
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
    
    # SEARCHING (FILTERING) - search by name,contactno,email,date (added filter on top)
    # http://127.0.0.1:3000/api/leads/?search=Hari
    def search(self):
        name = self.request.query_params.get('name')
        if name is not None:
            queryset = self.queryset.filter(name=name)
        else:
            queryset = self.queryset
        return queryset
    
    #http://127.0.0.1:3000/api/leads/?search=2024-07-09
    # def get_todayleads(self):
    #     today =datetime.date.today()
    #     if date is not None:
    #         queryset = self.queryset.filter(date=today)
    #     else:
    #         queryset = self.queryset
    #     return queryset

    # EXPORTING OF DATA IN .excel and .csv format , import csv,openpyxl, bytesio
    # CSV WORKING FINE DOWNLOADING TOTAL LEADS STUDENTS DATA IN .csv form
    #http://127.0.0.1:3000/api/leads/export-csv   -- these link will download the data in csv format
    @action(detail= False, methods=['get'], url_path='export-csv')
    def export_users_csv(self,request):
        # Create the HttpResponse object with the appropriate CSV header
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="leadsstudentsdata.csv"'
        
        writer = csv.writer(response)
        writer.writerow(['ID','Name', 'Email', 'Date','cc','contact_no','fee_coated','date','lead_source','batch_timing','lead_status','courses','tech_stack'])  # Add more fields as necessary
        
        leads = CreateNewLead.objects.all()  # Adjust the queryset as needed
        for lead in leads:
            writer.writerow([lead.id, lead.name, lead.email, lead.date, lead.cc, lead.contact_no, lead.fee_coated, lead.date, lead.lead_source, lead.batch_timing, lead.lead_status, lead.courses, lead.tech_stack])  # Add more fields as necessary
    
        return response
    
    #http://127.0.0.1:3000/api/leads/export-excel   -- these link will download the data in excel format
    # @action(detail= False, methods=['get'], url_path='export-excel')
    # def export_users_excel(self,request):
    #     # Create a Workbook
    #     wb = Workbook()
    #     ws = wb.active
    #     ws.title = 'Leads'

    #     # Write the headers
    #     ws.append(['ID','Name', 'Email', 'Date','cc','contact_no','fee_coated','date','lead_source','batch_timing','lead_status','courses','tech_stack'])  # Add more fields as necessary

    #     leads = CreateNewLead.objects.all()  # Adjust the queryset as needed
    #     for lead in leads:
    #         ws.append([lead.id, lead.name, lead.email, lead.date, lead.cc, lead.contact_no, lead.fee_coated, lead.date, lead.lead_source, lead.batch_timing, lead.lead_status, lead.courses, lead.tech_stack])  # Add more fields as necessary

    #     # Save the workbook to a BytesIO object
    #     output = BytesIO()
    #     wb.save(output)
    #     output.seek(0)  # Move to the beginning of the BytesIO object

    #     # Create the HttpResponse object with the appropriate Excel header
    #     response = HttpResponse(output, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    #     response['Content-Disposition'] = 'attachment; filename="leads.xlsx"'

    #     return response
    



    

    




    
    
    
    
    
    
    



    


