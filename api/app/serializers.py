from rest_framework import serializers
from .models import *

class ToDo_serializer(serializers.ModelSerializer):
    class Meta:
        model=ToDo
        fields='__all__'