from django.contrib import admin
from .models import Authorize
# Register your models here.

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id','username','email','password')      #list_display - This is data display in admin django
    search_fields = ('username',)                            #searrch_fields - You can search username and get the data in admin django

admin.site.register(Authorize,UserProfileAdmin)

