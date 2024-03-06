# Generated by Django 5.0.1 on 2024-01-18 06:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_product_productcategory'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.productcategory'),
        ),
        migrations.AddField(
            model_name='product',
            name='expert',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.expert'),
        ),
    ]
