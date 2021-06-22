<template>
    <layout>
        <div class="row">
            <div class="col-3"></div>
            <div class="mt-3 w-50">
                <note-info :note="note">
                    <b-button href="#" variant="primary">
                        <inertia-link :href="route('app:notes_edit', note.id)">
                            <span class="text-white">Edit</span>
                        </inertia-link>
                    </b-button>
                    <b-button href="#" variant="danger">
                        <inertia-link :href="route('app:notes_delete', note.id)">
                            <span class="text-white">Delete</span>
                        </inertia-link>
                    </b-button>
                </note-info>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '../../Components/Layout.vue'
// import NoteInfo from '../../Share/NoteInfo.vue'

export default {
    components: { 
        'layout': Layout,
        // 'note-info': NoteInfo,
    },
    props: {
        note: Object,
    },
}
</script>
