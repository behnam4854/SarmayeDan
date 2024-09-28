from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from transactions.views import TransactionViewSet
from budgets.views import BudgetViewSet, BudgetsCatgsViewSet
router = routers.DefaultRouter()
router.register(r'transactions', TransactionViewSet)
router.register(r'budgets', BudgetViewSet)
router.register(r'budgetCatgs', BudgetsCatgsViewSet)
# router.register(r'transactions', TransactionViewSet, basename='transaction')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path("accounts/", include("django.contrib.auth.urls")),
    path('accounts/', include('accounts.urls')),
    path('budgets/', include('budgets.urls')),
    path('api-auth/', include('rest_framework.urls'))
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


