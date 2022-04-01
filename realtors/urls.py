from . views import *
from django.urls import path

urlpatterns = [
    path('', RealtorListView.as_view()),
    path('topseller', TopSellerView.as_view()),
    path('<pk>', RealtorView.as_view()),
]