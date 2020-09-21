from django.contrib.auth import password_validation
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from authentication.models import CustomUser


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Get user information with the JWT token
    """

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)

        # Add email inside token
        token['email'] = user.email
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add email to payload
        data['email'] = self.user.email

        return data


class CustomUserSerializer(serializers.ModelSerializer):
    """
    User serializer to create new users
    """
    email = serializers.EmailField(
        required=True
    )
    password = serializers.CharField(label=_("Password"),
                                     min_length=8,
                                     write_only=True,)

    class Meta:
        model = CustomUser
        fields = ('email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    @staticmethod
    def validate_email(value):
        """
        Check if email has already been taken
        """
        if CustomUser.objects.filter(email=value).count() > 0:
            raise serializers.ValidationError("This email has already been taken.")
        return value
