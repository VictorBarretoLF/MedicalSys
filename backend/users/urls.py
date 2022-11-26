from django.urls import path
from .views import CustomUserCreate, UserList #, BlacklistTokenUpdateView

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('all/', UserList.as_view(), name="get_all_users"),
    # path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
    #      name='blacklist')
]
