from django.contrib import admin
from . import models


# @admin.register(models.Patient)
# class AuthorAdmin(admin.ModelAdmin):
#     list_display = ('__all__')


admin.site.register(models.Patient)
