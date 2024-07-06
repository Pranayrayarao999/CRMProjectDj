from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CreateNewUserViewSet, LogoutView

router = DefaultRouter()

router.register(r'Auth', CreateNewUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('logout/', LogoutView.as_view())
]
