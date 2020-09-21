from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from authentication.views import ObtainTokenPairWithEmailView, CustomUserCreate

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/', ObtainTokenPairWithEmailView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]