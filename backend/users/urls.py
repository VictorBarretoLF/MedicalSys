from django.urls import path
from .views import CustomUserCreate, UserList , UserDetail

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('all/', UserList.as_view(), name="get_all_users"),
    path('<int:pk>/', UserDetail.as_view(), name='detail_user'),
]
