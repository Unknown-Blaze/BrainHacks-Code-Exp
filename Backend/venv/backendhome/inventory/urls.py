from django.urls import path
from . import views

urlpatterns = [
    path('inventory/<int:pk>/', views.InventoryItemDetailAPIView.as_view()),
    path('inventory/', views.InventoryItemCreateAPIView.as_view()),
    path('inventory/all/', views.InventoryItemListAPIView.as_view()),
    path('market/<int:pk>/', views.MarketItemDetailAPIView.as_view()),
    path('market/', views.MarketItemCreateAPIView.as_view()),
    path('market/all/', views.MarketItemListAPIView.as_view())
]
