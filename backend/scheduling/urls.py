from django.urls import path
from .views import SchedulingDetail, SchedulingList

app_name = 'scheduling'

urlpatterns = [
    path('<int:pk>/', SchedulingDetail.as_view(), name='detailcreate'),
    path('', SchedulingList.as_view(), name='listcreate'),
]
