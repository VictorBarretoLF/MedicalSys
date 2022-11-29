from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('patient.urls', namespace='patient')),
    path('api/user/', include('users.urls', namespace='users')),
    path('api/scheduling/', include('scheduling.urls', namespace='scheduling')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
