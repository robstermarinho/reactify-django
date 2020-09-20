from django.contrib import admin
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views
from django.urls import path, reverse_lazy, include
from django.contrib.auth.decorators import login_required

urlpatterns = [
    # ADMIN
    path('admin/', admin.site.urls),

    # AUTH
    path('accounts/', include('django.contrib.auth.urls')),  # new

    # FRONT-END (REACT)
    path('', login_required(TemplateView.as_view(template_name='front-end/index.html'))),
]
