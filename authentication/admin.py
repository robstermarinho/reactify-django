from django.contrib import admin
from .models import CustomUser


class CustomUserAdmin(admin.ModelAdmin):
    """
    Add custom user model to Admin
    """
    model = CustomUser


admin.site.register(CustomUser, CustomUserAdmin)
