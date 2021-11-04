# Generated by Django 3.2.9 on 2021-11-04 14:39

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(blank=True, default='', max_length=20, null=True)),
                ('age', models.IntegerField(blank=True, null=True)),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, null=True, region=None, unique=True)),
                ('address', models.CharField(blank=True, default='', max_length=50, null=True)),
                ('email', models.CharField(blank=True, default='', max_length=40, null=True)),
            ],
        ),
    ]
