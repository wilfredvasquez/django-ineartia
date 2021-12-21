import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.conf import settings
from django.shortcuts import redirect
from django.urls import reverse
from inertia.views import render_inertia
from inertia.share import share_flash
from marshmallow import ValidationError
from utils.decorators import validate_csrf_from_mobile

from . import serializers

LOGIN_REDIRECT_URL = getattr(settings, "LOGIN_REDIRECT_URL", "/")


@validate_csrf_from_mobile
def login_view(request):
    errors = {'username': ""}
    if request.user.is_authenticated:
        return redirect(LOGIN_REDIRECT_URL)

    if request.method == "POST":
        data = json.loads(request.body)
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
        'title': 'Login'
    }
    return render_inertia(request, "Login", props)


def logout_view(request):
    logout(request)
    return redirect(LOGIN_REDIRECT_URL)


def register_view(request):
    register_schema = serializers.RegisterSchema()
    if request.method == 'POST':
        try:
            data = register_schema.loads(request.body)
        except ValidationError as err:
            share_flash(request, error="Exists errors on form")
            share_flash(request, errors=err.messages)
        else:
            user = User()
            user.email = data.get("email")
            user.username = data.get("username")
            user.first_name = data.get("firstName")
            user.first_name = data.get("lastName")
            user.set_password(data.get("password"))
            user.save()
            return redirect("authentication:login")

    props = {
        'title': 'Register'
    }
    return render_inertia(request, "Register", props)
