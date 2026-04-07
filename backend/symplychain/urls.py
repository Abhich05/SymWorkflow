"""URL configuration for symplychain project."""

from django.contrib import admin
from django.urls import path
from django.http import JsonResponse


def health_check(request):
    """Simple healthcheck endpoint for deployment verification."""
    return JsonResponse({"status": "ok"})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health_check, name="health-check"),
]
