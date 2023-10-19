from django.db import models

# Create your models here.

class Art(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='files/artwork')
    price = models.DecimalField(max_digits=9, decimal_places=2)
    size = models.CharField(max_length=100, default='')
    sold = models.BooleanField()
    original = models.BooleanField(default=False)
    portrait = models.BooleanField(default=False)
    print = models.BooleanField(default=False)
    landscape = models.BooleanField(default=False)
    stamp = models.BooleanField(default=False)
    etching = models.BooleanField(default=False)
    
