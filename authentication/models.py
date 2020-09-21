from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import date
from django.utils.translation import gettext_lazy as _

from authentication.managers import CustomUserManager


class CustomUser(AbstractUser):
    """
    Extending Abstract User to include custom fields
    """
    username = None
    email = models.EmailField(
        _('email address'),
        unique=True,
        blank=False,
        help_text=_(
            "Please enter a valid email address, this will also be your user name."
        ),)
    date_of_birth = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("User's Date of Birth"),
        help_text=_("Please enter your date of birth"),
    )

    objects = CustomUserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    @property
    def age(self: object) -> int:
        """
        Returns the users age for display as an integer
        """
        today = date.today()
        age = today.year - self.date_of_birth.year - ((today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day))
        return int(age)
