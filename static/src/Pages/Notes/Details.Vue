<template>
    <div>
        <p>
            {{ note.id }} --- {{ note.excerpt }} - {{ note.content }}
        </p>
    </div>
</template>

<script>

export default {
    props: {
        note: Object,
    },
}
</script>
