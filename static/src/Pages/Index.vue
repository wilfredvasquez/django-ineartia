<template>
  <layout>
    <div class="py-20 flex items-center justify-center">
      <img src="/static/img/django-inertia.png" alt="" />
    </div>
    <div class="text-center items-center justify-center">
      <p class="py-5">Este es un demo de Django con Inertia.js</p>
      <p>Disfrútalo <span v-if="$page.props.auth.user.id">{{ $page.props.auth.user.email }}</span>!</p>
    </div>
  </layout>
</template>

<script>
    import Layout from '../Components/Layout.vue'
    export default {
        components: { 
            'layout': Layout,
        },
    }
</script>
