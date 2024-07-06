from django.db import models
from django.utils import timezone

# Create your models here.
class CreateNewLead(models.Model):
    BATCH_TIMING_CHOICES = [
        ('7AM_8AM', '7AM_8AM'),
        ('8AM_9AM', '8AM_9AM'),
        ('9AM_10AM', '9AM_10AM'),
        ('10AM_11AM', '10AM_11AM'),
        ('11AM_12PM', '11AM_12PM'),
        ('12PM_1PM', '12PM_1PM'),
        ('1PM_2PM', '1PM_2PM'),
        ('2PM_3PM', '2PM_3PM'),
        ('3PM_4PM', '3PM_4PM'),
        ('4PM_5PM', '4PM_5PM'),
        ('5PM_6PM', '5PM_6PM'),
        ('6PM_7PM', '6PM_7PM'),
        ('7PM_8PM', '7PM_8PM'),
        ('8PM_9PM', '8PM_9PM'),
    ]

    LEAD_SOURCE_CHOICES = [
        ('None', 'None'),
        ('WalkIn', 'WalkIn'),
        ('StudentReferral', 'StudentReferral'),
        ('Demo', 'Demo'),
        ('WebSite', 'WebSite'),
        ('WebsiteChat', 'WebsiteChat'),
        ('InboundCall', 'InboundCall'),
        ('GoogleAdWords', 'GoogleAdWords'),
        ('FacebookAds', 'FacebookAds'),
        ('GoogleMyBusiness', 'GoogleMyBusiness'),
        ('WhatsAppDigitalLync', 'WhatsAppDigitalLync'),
    ]

    COURSES_CHOICES = [
        ('Angular', 'Angular'),
        ('AWS', 'AWS'),
        ('AWSWithDevOps', 'AWSWithDevOps'),
        ('Azure', 'Azure'),
        ('AzureDevOps', 'AzureDevOps'),
        ('BusinessAnalyst', 'BusinessAnalyst'),
        ('CloudOpsMasters', 'CloudOpsMasters'),
        ('DevOps', 'DevOps'),
        ('FrontEndAngular', 'FrontEndAngular'),
        ('FrontEndReact', 'FrontEndReact'),
        ('FullStackJAVA', 'FullStackJAVA'),
        ('FullStackMEAN', 'FullStackMEAN'),
        ('FullStackMERN', 'FullStackMERN'),
        ('FullstackPython', 'FullstackPython'),
        ('FullStackReactJAVA', 'FullStackReactJAVA'),
        ('Java', 'Java'),
        ('NeedCounselling', 'NeedCounselling'),
        ('Others', 'Others'),
        ('PowerBI', 'PowerBI'),
        ('Python', 'Python'),
        ('React', 'React'),
        ('SalesForceAdmin', 'SalesForceAdmin'),
        ('SalesforceDeveloper', 'SalesforceDeveloper'),
        ('ServiceNow', 'ServiceNow'),
        ('AzureDataEngineer', 'AzureDataEngineer'),
        ('Tableau', 'Tableau'),
        ('Testing', 'Testing'),
    ]

    LEAD_STATUS_CHOICES = [
        ('None', 'None'),
        ('NotContacted', 'NotContacted'),
        ('Attempted', 'Attempted'),
        ('WarmLead', 'WarmLead'),
        ('Opportunity', 'Opportunity'),
        ('AttendedDemo', 'AttendedDemo'),
        ('Visited', 'Visited'),
        ('Registered', 'Registered'),
        ('ColdLead', 'ColdLead'),
    ]

    TECH_STACK_CHOICES = [
        ('CloudOps', 'CloudOps'),
        ('Salesforce', 'Salesforce'),
        ('FullStack', 'FullStack'),
        ('DataStack', 'DataStack'),
        ('ServiceNow', 'ServiceNow'),
        ('BusinessStack', 'BusinessStack'),
        ('CareerCounselling', 'CareerCounselling'),
    ]

    CLASS_MODE_CHOICES = [
        ('HYDClassRoom', 'HYDClassRoom'),
        ('BLRClassRoom', 'BLRClassRoom'),
        ('IndiaOnline', 'IndiaOnline'),
        ('InternationalOnline', 'InternationalOnline'),
    ]

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    cc = models.BigIntegerField()
    contact_no = models.BigIntegerField()
    email = models.EmailField(max_length=255)
    fee_coated = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    date = models.DateField(default=timezone.now)

    lead_source = models.CharField(
        max_length=20,
        choices=LEAD_SOURCE_CHOICES,
        default='None',
    )

    batch_timing = models.CharField(
        max_length=10,  # Adjusted max_length to fit the longest value
        choices=BATCH_TIMING_CHOICES,
        default='7AM_8AM',
    )

    class_mode = models.CharField(
        max_length=20,
        choices=CLASS_MODE_CHOICES,
        default='HYDClassRoom',
    )

    lead_status = models.CharField(
        max_length=12,
        choices=LEAD_STATUS_CHOICES,
        default='None',
    )

    courses = models.CharField(
        max_length=20,
        choices=COURSES_CHOICES,
        default='Angulaar',
    )

    tech_stack = models.CharField(
        max_length=20,  # Adjusted max_length to fit the longest value
        choices=TECH_STACK_CHOICES,
        default='CloudOps',
    )