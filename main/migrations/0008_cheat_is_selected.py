# Generated by Django 3.0.7 on 2020-07-01 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_auto_20200701_2002'),
    ]

    operations = [
        migrations.AddField(
            model_name='cheat',
            name='is_selected',
            field=models.BooleanField(default=False, verbose_name='Is selected'),
        ),
    ]