# Generated by Django 3.0.2 on 2020-01-13 16:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0009_auto_20200105_1014'),
        ('customer', '0004_auto_20200109_0906'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='booked_property',
            field=models.ForeignKey(help_text='Booked Property', null=True, on_delete=django.db.models.deletion.CASCADE, to='property.Property'),
        ),
    ]