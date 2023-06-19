# Generated by Django 3.1.2 on 2021-05-26 16:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0005_auto_20210526_0321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fundingpage',
            name='funding_end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime.today, null=True),
        ),
        migrations.AlterField(
            model_name='fundingpage',
            name='funding_start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime.today, null=True),
        ),
        migrations.AlterField(
            model_name='fundingpage',
            name='funding_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
