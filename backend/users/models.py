from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLE_CHOICES = [
        ('employee', 'Сотрудник'),
        ('director', 'Директор'),
        ('admin', 'Администратор'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='employee')
    restaurant = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f'{self.get_full_name() or self.username} ({self.get_role_display()})'
