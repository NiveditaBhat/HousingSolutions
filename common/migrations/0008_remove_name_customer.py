# Generated by Django 3.0.2 on 2020-01-09 09:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0007_auto_20200101_1518'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='name',
            name='customer',
        ),
    ]