from rest_framework import serializers
from .models import Authorize

class CreateAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authorize
        fields = '__all__'