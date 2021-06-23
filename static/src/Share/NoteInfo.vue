<template>
    <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">{{ note.excerpt }}</h3>
        </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2 shadow overflow-hidden focus:ring-2 focus:ring-offset-2 rounded-md bg-white p-5">
        <div class="mb-5">
            <p class="leading-relaxed">{{ note.content }}</p>
        </div>
        <slot></slot>
    </div>
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
