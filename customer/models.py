from django.contrib.auth.models import User
from django.db import models
from phone_field import PhoneField

from booking.models import Booking


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = PhoneField(blank=True, null=True, help_text='Phone number')
    booking = models.OneToOneField(Booking, null=True,
                                   on_delete=models.CASCADE,
                                   help_text='Booking')
    
    class Meta:
        verbose_name_plural = 'Customers registered under HousingSolutions'

    def __str__(self):
        return "Customer {id}".format(id=self.id)
