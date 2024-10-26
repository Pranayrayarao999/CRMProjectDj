from django.urls import path,include
from Auth1 import views
urlpatterns = [
    path("Registration/",views.RegistrationView.as_view()),
    path("Login/",views.LoginView.as_view()),
    
]