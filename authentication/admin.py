from django.contrib import admin

from .forms import CustomUserCreationForm
from .models import CustomUser


class CustomUserAdmin(admin.ModelAdmin):
    """
    Add custom user model to Admin
    """
    model = CustomUser

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )

    add_form = CustomUserCreationForm
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('first_name', 'last_name', 'email')
    ordering = ('email',)


admin.site.register(CustomUser, CustomUserAdmin)
