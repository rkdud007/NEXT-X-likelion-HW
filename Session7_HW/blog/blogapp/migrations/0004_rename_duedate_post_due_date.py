# Generated by Django 3.2.2 on 2021-05-07 05:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0003_post_duedate'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='duedate',
            new_name='due_date',
        ),
    ]