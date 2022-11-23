from django.urls import path
from .views import PacienteList, PacienteDetail

app_name = 'api'

urlpatterns = [
    path('<int:pk>/', PacienteDetail.as_view(), name='detalhescriar'),
    path('', PacienteList.as_view(), name='listarcriar'),
]