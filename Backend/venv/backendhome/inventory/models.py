from django.db import models

class InventoryItem(models.Model):
    name = models.CharField(max_length = 50)
    quantity = models.IntegerField()
    daysLeft = models.IntegerField()
    emoji = models.CharField(max_length = 1)

class MarketItem(models.Model):
    name = models.CharField(max_length = 50)
    quantity = models.IntegerField()
    daysLeft = models.IntegerField()
    emoji = models.CharField(max_length = 1)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=10.00)
