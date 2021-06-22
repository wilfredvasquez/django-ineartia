<template>
  <layout>
    
    <div class="row m-2">
      <div class="col-4" v-for="note in notes" :key="note.id">
        
      </div>
    </div>
    <div class="m-3">
      <inertia-link :href="route('app:notes_create')">
        <span class="text-white btn btn-primary">New Note</span>
      </inertia-link>
    </div>
  </layout>
</template>

<script>

  import Layout from '../../Components/Layout.vue'
  //import NoteInfo from '../../Share/NoteInfo.vue'

  export default {
      components: { 
        'layout': Layout,
        // 'note-info': NoteInfo,
      },
      props: {
          notes: Array,
      },
  }
</script>
