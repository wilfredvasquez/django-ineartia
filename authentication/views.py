import json
from django.contrib.auth import authenticate, login, logout
from django.conf import settings
from django.shortcuts import redirect
from django.urls import reverse
from inertia.views import render_inertia
from inertia.share import share_flash

LOGIN_REDIRECT_URL = getattr(settings, "LOGIN_REDIRECT_URL", "/")

def login_view(request):
    errors = {'username': ""}
    if request.user.is_authenticated:
        return redirect(LOGIN_REDIRECT_URL)

    if request.method == "POST":
        data  = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(LOGIN_REDIRECT_URL)
        else:
            errors = {'username': "Wrong login"}
            share_flash(request, errors=errors)
    props = {
        'errors': errors,
        'title': 'Login'
    }
    return render_inertia(request, "Login", props)


def logout_view(request):
    logout(request)
    return redirect(LOGIN_REDIRECT_URL)
