# Generated by Django 3.2.12 on 2022-02-13 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0006_alter_image_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='money',
            field=models.DecimalField(decimal_places=3, default=0, max_digits=11),
        ),
        migrations.AlterField(
            model_name='order',
            name='price',
            field=models.DecimalField(decimal_places=3, default=0, max_digits=11),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=3, default=0, max_digits=11, verbose_name='价格'),
        ),
    ]
