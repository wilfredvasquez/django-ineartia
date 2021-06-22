<template>
  <layout>
    <div class="mt-10 sm:mt-0">
      <div class="grid grid-cols-3 gap-4">
        <div class="md:grid md:grid-cols-1 md:gap-6 px-10" v-for="note in notes" :key="note.id">
          <note-info :note="note">
            <inertia-link :href="route('app:notes_detail', note.id)" class="mt-10 shadow overflow-hidden sm:rounded-md bg-indigo-500 p-3 no-underline">
              <span class="text-white">Detail</span>
            </inertia-link>
          </note-info>
        </div>
      </div>
    </div>

    
    <div class="m-10">
      <inertia-link :href="route('app:notes_create')" class="shadow overflow-hidden sm:rounded-md bg-indigo-500 p-3 no-underline">
        <span class="text-white">New Note</span>
      </inertia-link>
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
          notes: Array,
      },
  }
</script>
