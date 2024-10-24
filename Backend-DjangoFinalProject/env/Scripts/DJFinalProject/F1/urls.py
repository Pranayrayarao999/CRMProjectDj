from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CreateNewLeadViewSet


router = DefaultRouter()

router.register(r'leads', CreateNewLeadViewSet)

urlpatterns = [
    path('', include(router.urls)),

]
