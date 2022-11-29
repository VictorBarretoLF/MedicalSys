from rest_framework import serializers
from .models import NewUser


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=6, write_only=True)

    class Meta:
        model = NewUser
        fields = ('id', 'email', 'name', 'password', 'created_at')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    

class MyCustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = NewUser
        fields = ('id', 'email', 'name', 'created_at')
        

