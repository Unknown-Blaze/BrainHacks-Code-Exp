from rest_framework import serializers
from .models import InventoryItem, MarketItem

class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = [
            'name',
            'quantity',
            'daysLeft',
            'emoji'
        ]

class MarketItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketItem
        fields = [
            'name',
            'quantity',
            'daysLeft',
            'emoji',
            'price'
        ]