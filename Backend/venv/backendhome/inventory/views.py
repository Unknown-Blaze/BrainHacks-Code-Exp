from rest_framework import generics

from .models import InventoryItem, MarketItem
from .serializers import InventoryItemSerializer, MarketItemSerializer

class InventoryItemCreateAPIView(generics.CreateAPIView):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer

    def perform_create(self, serializer):
        #serializer.save(user = self.request.user)
        print(serializer)
        serializer.save()


class InventoryItemListAPIView(generics.ListAPIView):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer


class InventoryItemDetailAPIView(generics.RetrieveAPIView):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer

    # Detail View Shows a Specific Item
    # lookup_field = 'pk'

class MarketItemCreateAPIView(generics.CreateAPIView):
    queryset = MarketItem.objects.all()
    serializer_class = MarketItemSerializer

    def perform_create(self, serializer):
        #serializer.save(user = self.request.user)
        print(serializer)
        serializer.save()


class MarketItemListAPIView(generics.ListAPIView):
    queryset = MarketItem.objects.all()
    serializer_class = MarketItemSerializer


class MarketItemDetailAPIView(generics.RetrieveAPIView):
    queryset = MarketItem.objects.all()
    serializer_class = MarketItemSerializer

    # Detail View Shows a Specific Item
    # lookup_field = 'pk'






