# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-06 04:56
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20160205_2353'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='licensor',
            options={'ordering': ['lic_type', 'name']},
        ),
        migrations.AlterOrderWithRespectTo(
            name='licensor',
            order_with_respect_to=None,
        ),
    ]
