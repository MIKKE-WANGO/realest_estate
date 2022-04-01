# Generated by Django 3.2.5 on 2022-04-01 16:41

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('realtors', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(unique=True)),
                ('address', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('state', models.CharField(max_length=255)),
                ('zipcode', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.IntegerField()),
                ('bedrooms', models.IntegerField()),
                ('sqft', models.IntegerField()),
                ('bathrooms', models.DecimalField(decimal_places=1, max_digits=2)),
                ('sale_type', models.CharField(choices=[('For Sale', 'For Sale'), ('For Rent', 'For Rent')], default='For Sale', max_length=10)),
                ('home_type', models.CharField(choices=[('House', 'House'), ('Condo', 'Condo'), ('Townhouse', 'Townhouse')], default='House', max_length=10)),
                ('main_photo', models.ImageField(upload_to='listings/')),
                ('photo_1', models.ImageField(upload_to='listings/')),
                ('photo_2', models.ImageField(upload_to='listings/')),
                ('photo_3', models.ImageField(upload_to='listings/')),
                ('photo_4', models.ImageField(upload_to='listings/')),
                ('photo_5', models.ImageField(upload_to='listings/')),
                ('photo_6', models.ImageField(upload_to='listings/')),
                ('photo_7', models.ImageField(upload_to='listings/')),
                ('photo_8', models.ImageField(upload_to='listings/')),
                ('photo_9', models.ImageField(upload_to='listings/')),
                ('photo_10', models.ImageField(upload_to='listings/')),
                ('photo_11', models.ImageField(upload_to='listings/')),
                ('photo_12', models.ImageField(upload_to='listings/')),
                ('is_published', models.BooleanField(default=True)),
                ('list_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('realtor', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='realtors.realtor', unique=True)),
            ],
        ),
    ]
