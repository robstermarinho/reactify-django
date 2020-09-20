from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    """
    Extending Abstract User to include custom fields
    """
    tag = models.CharField(blank=True, max_length=120)

