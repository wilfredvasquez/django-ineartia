from django.db import models
from model_utils.models import TimeStampedModel


# Create your models here.
class Note(TimeStampedModel):
    excerpt = models.CharField(max_length=255)
    content = models.TextField()
