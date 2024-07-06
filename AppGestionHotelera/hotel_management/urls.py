from django.urls import include, path
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),  # URL de Django Admin
    path('api/', include('reservations.urls')),
]
