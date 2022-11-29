from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import generics
from .models import NewUser


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = NewUser.objects.all()
    serializer_class = CustomUserSerializer

class UserDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = NewUser.objects.all()
    serializer_class = CustomUserSerializer


""" Concrete View Classes
# CreateAPIView
Used for create-only endpoints.
# ListAPIView
Used for read-only endpoints to represent a collection of model instances.
# RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
# DestroyAPIView
Used for delete-only endpoints for a single model instance.
# UpdateAPIView
Used for update-only endpoints for a single model instance.
# ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
# RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
# RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""
