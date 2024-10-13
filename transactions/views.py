from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Transaction
from .serializers import TransactionSerializer
from .visulize_helper import analyze_data, plot_data


class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [AllowAny]
    def perform_create(self, serializer):
        # Automatically set the user to the currently authenticated user
        serializer.save(user=self.request.user)

    def get_queryset(self):
        # Filter expenses to only show those belonging to the authenticated user
        return self.queryset.filter(user=self.request.user)

def report_view(request, format=None):
    summary = analyze_data()
    return render(request, 'report.html', {'summary': summary})




