<template>
  <layout>
    <div class="mt-10 sm:mt-0">
      <div class="grid grid-cols-3 gap-4">
        <div class="md:grid md:grid-cols-1 md:gap-6 px-10" v-for="note in notes" :key="note.id">
          <note-info :note="note">
            <inertia-link :href="route('app:notes_detail', note.id)" class="no-underline">
              <button class="inline-flex justify-center p-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Detail
              </button>
            </inertia-link>
          </note-info>
        </div>
      </div>
    </div>

    
    <div class="m-10">
      <inertia-link :href="route('app:notes_create')" class="no-underline">
        <button class="inline-flex justify-center p-2 m-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          New Note
        </button>
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
