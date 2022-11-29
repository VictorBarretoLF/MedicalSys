from django.urls import path
from .views import PatientList, PatientDetail

app_name = 'patient'

urlpatterns = [
    path('<int:pk>/', PatientDetail.as_view(), name='detailcreate'),
    path('', PatientList.as_view(), name='listcreate'),
]
