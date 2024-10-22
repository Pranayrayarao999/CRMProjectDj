from django.contrib import admin

# Register your models here.
from .models import User
# Register your models here.

class AuthUserProfileAdmin(admin.ModelAdmin):
    list_display = ('id','name','email','password','is_active','is_admin')      #list_display - This is data display in admin django
    search_fields = ('name',)                            #searrch_fields - You can search username and get the data in admin django

admin.site.register(User,AuthUserProfileAdmin)
