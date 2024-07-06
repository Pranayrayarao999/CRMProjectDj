from rest_framework import serializers
from .models import CreateNewLead

class CreateNewLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateNewLead
        fields = '__all__'