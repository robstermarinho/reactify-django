from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions

from authentication.api.serializers import MyTokenObtainPairSerializer


class ObtainTokenPairWithColorView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer
