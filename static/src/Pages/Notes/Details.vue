<template>
    <layout>
        <div class="grid grid-cols-3 gap-4 py-10">
            <div class="..."></div>
            <div class="md:grid md:grid-cols-1 md:gap-6">
                <note-info :note="note">
                    <button
                        href="#" 
                        class="inline-flex justify-center p-2 m-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <inertia-link :href="route('app:notes_edit', note.id)" class="no-underline">
                            <span class="text-white">Edit</span>
                        </inertia-link>
                    </button>
                    <button
                        href="#"
                        class="inline-flex justify-center p-2 m-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <inertia-link :href="route('app:notes_delete', note.id)" class="no-underline">
                            <span class="text-white">Delete</span>
                        </inertia-link>
                    </button>
                </note-info>
            </div>
            <div class="..."></div>
        </div>
    </layout>
</template>

<script>
import Layout from '../../Components/Layout.vue'
import NoteInfo from '../../Share/NoteInfo.vue'

export default {
    components: { 
        'layout': Layout,
        'note-info': NoteInfo,
    },
    props: {
        note: Object,
    },
}
</script>
