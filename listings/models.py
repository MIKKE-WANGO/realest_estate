from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor
# Create your models here.


class Listing(models.Model):

    class SaleType(models.TextChoices):
        
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'
        

    class HomeType(models.TextChoices):
        
        HOUSE = 'House'
        CONDO = 'Condo'
        TOWNHOUSE = 'Townhouse'

    title =  models.CharField(max_length=255)
    realtor = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    slug = models.SlugField(unique=True)
    address =  models.CharField(max_length=255)
    city =  models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode =  models.CharField(max_length=255)
    description =  models.TextField()
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    sqft = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    sale_type = models.CharField(max_length=10,choices=SaleType.choices, default=SaleType.FOR_SALE)
    home_type = models.CharField(max_length=10,choices=HomeType.choices, default=HomeType.HOUSE)
    main_photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_7 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_8 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_9 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_10 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_11 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_12 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now)


    def __str__(self):
        return self.title