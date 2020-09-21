from rest_framework_simplejwt.serializers import TokenObtainSerializer
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from authentication.models import CustomUser


class TokenObtainPairSerializer(TokenObtainSerializer):
    """
    Get user information with token
    """

    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['username'] = self.user.get_username()
        data['name'] = self.user.get_full_name()
        data['email'] = self.user.email

        return data


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['email'] = user.email
        return token


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def validate_username(self, value):
        """
        Check if username has already been taken
        """
        if CustomUser.objects.filter(username=value).count() > 0:
            raise serializers.ValidationError("This username has already been taken.")
        return value

    def validate_email(self, value):
        """
        Check if email has already been taken
        """
        if CustomUser.objects.filter(email=value).count() > 0:
            raise serializers.ValidationError("This email has already been taken.")
        return value
