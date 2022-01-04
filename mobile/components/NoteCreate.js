import React from 'react'
import NoteForm from './Note/NoteForm'

export default function NoteCreate() {
    return (
        <NoteForm note={null} url="notes/create/" title="New Note" />
    )
}
