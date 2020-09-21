from django.contrib.auth.forms import UserCreationForm

from authentication.models import CustomUser


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ("email",)
