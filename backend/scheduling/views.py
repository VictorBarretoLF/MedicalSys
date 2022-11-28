from rest_framework import generics
from .models import Scheduling
from .serializers import SchedulingSerializer
from rest_framework.permissions import IsAuthenticated


class SchedulingList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Scheduling.objects.all()
    serializer_class = SchedulingSerializer


class SchedulingDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Scheduling.objects.all()
    serializer_class = SchedulingSerializer
