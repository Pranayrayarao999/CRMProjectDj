from rest_framework import serializers
from Auth1.models  import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields="__all__"

    def validate(self, attrs):
        if attrs['password'] != attrs["password2"]:
            raise serializers.ValidationError({"msg":"password did not match"})
        return attrs
    
    def create(self, validated_data):
        user=User.objects.create_user(
            name=validated_data['name'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class LoginSerializers(serializers.Serializer):
    email=serializers.CharField()
    password=serializers.CharField(write_only=True)