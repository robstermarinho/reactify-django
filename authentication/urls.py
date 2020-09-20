from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from authentication.views import ObtainTokenPairWithColorView

urlpatterns = [
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]