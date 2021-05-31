<template>
    <div>
        <p v-for="note in notes" :key="note.id">
            <inertia-link :href="route('app:notes_detail', note.id)" tabindex="-1">
                {{ note.id }}
            </inertia-link>
            ----- {{ note.excerpt }} - {{ note.content }}
        </p>
    </div>
</template>

<script>

export default {
    props: {
        notes: Array,
    },
}
</script>
