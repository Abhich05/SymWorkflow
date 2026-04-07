"""Celery configuration for symplychain project."""

import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "symplychain.settings")

app = Celery("symplychain")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()
