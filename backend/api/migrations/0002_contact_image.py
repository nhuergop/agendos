# Generated by Django 4.0.2 on 2022-02-11 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]