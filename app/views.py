from django.shortcuts import redirect
from django.urls import reverse
from inertia.views import render_inertia
from inertia.share import share_flash
from marshmallow import ValidationError

from . import serializers, models


def index(request):
    props = {
        'title': 'Index',
    }

    return render_inertia(
        request, 'Index', props,
    )


def notes(request):
    if not request.user.is_authenticated:
        return redirect("authentication:login")

    notes = models.Note.objects.all()
    note_schema = serializers.NoteSchema(many=True)

    props = {
        'title': 'Notes',
        'notes': note_schema.dump(notes)
    }

    return render_inertia(
        request, 'Notes', props,
    )


def notes_detail(request, id):
    if not request.user.is_authenticated:
        return redirect("authentication:login")

    note = models.Note.objects.get(id=id)
    note_schema = serializers.NoteSchema()

    props = {
        'title': 'Note Detail',
        'note': note_schema.dump(note)
    }

    return render_inertia(
        request, 'Details', props,
    )


def notes_edit(request, id):
    if not request.user.is_authenticated:
        return redirect("authentication:login")

    note = models.Note.objects.get(id=id)
    note_schema = serializers.NoteSchema()

    if request.method == 'POST':
        try:
            data = note_schema.loads(request.body)
        except ValidationError as err:
            share_flash(request, error="Exists errors on form")
            share_flash(request, errors= err.messages)
        else:
            models.Note.objects.filter(id=id).update(**data)
            return redirect(reverse("app:notes_detail", kwargs={'id': note.id}))
    
    props = {
        'title': 'Edit Note',
        'note': note_schema.dump(note)
    }

    return render_inertia(
        request, 'Edit', props,
    )


def notes_delete(request, id):
    if not request.user.is_authenticated:
        return redirect("authentication:login")

    note = models.Note.objects.get(id=id)
    try:
        note.delete()
        return redirect(reverse("app:notes"))
    except Exception:
        pass
    
    return redirect(reverse("app:notes_detail", kwargs={'id': note.id}))


def notes_create(request):
    if not request.user.is_authenticated:
        return redirect("authentication:login")

    if request.method == 'POST':
        try:
            note_schema = serializers.NoteSchema()
            data = note_schema.loads(request.body)
        except ValidationError as err:
            share_flash(request, error="Exists errors on form")
            share_flash(request, errors= err.messages)
        else:
            models.Note.objects.create(**data)
            return redirect(reverse("app:notes"))
    
    props = {
        'title': 'Create Note',
    }

    return render_inertia(
        request, 'Create', props,
    )
