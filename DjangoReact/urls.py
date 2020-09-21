from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # ADMIN
    path('admin/', admin.site.urls),

    # AUTH
    path('accounts/', include('django.contrib.auth.urls')),

    # API
    path('api/', include('authentication.urls')),

    # FRONT-END (REACT)
    path('', include('frontend.urls'))
]

