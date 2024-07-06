from django.contrib import admin
from .models import CreateNewLead
# Register your models here.
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id','name','cc','contact_no','email','fee_coated','description','date','lead_source','batch_timing','class_mode','lead_status','courses','tech_stack')
    search_fields = ('name','email','contact_no','courses')
admin.site.register(CreateNewLead, UserProfileAdmin)


#list_display - This is data display in admin django
#searrch_fields - You can search username and get the data in admin django