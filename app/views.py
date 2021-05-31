from django.shortcuts import render
from inertia.views import render_inertia

from . import serializers, models


def notes(request):
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
    note = models.Note.objects.get(id=id)
    note_schema = serializers.NoteSchema()

    props = {
        'title': 'Note Detail',
        'note': note_schema.dump(note)
    }

    return render_inertia(
        request, 'Details', props,
    )

