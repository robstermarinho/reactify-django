from django.contrib.auth.decorators import login_required
from django.shortcuts import render


def index_view(request):
    return render(request, 'frontend/index.html', context=None)
