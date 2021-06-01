<template>
    <b-card
        :title="note.excerpt"
      tag="note"
      class="mb-2"
    >
        <b-card-text>
            {{ note.content }}
        </b-card-text>

        <slot> </slot>
    </b-card>
</template>

<script>

export default {
    name: "NoteInfo",
    props: {
        note: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
