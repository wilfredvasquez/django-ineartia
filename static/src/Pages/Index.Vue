<template>
  <layout>
    <div class="row">
      <div class="col-3"></div>
        <div class="mt-3 w-50">
          <b-card
            title="Django + Inertia.js"
            img-src="/static/img/django-inertia.png"
            img-alt="Django + Inertia Logos"
            img-top
            tag="article"
            class="p-5 text-center"
          >
            <b-card-text>
              <p class="pt-5">Este es un demo de Django con Inertia.js</p>
              <p>Disfrútalo <span v-if="$page.props.auth.user.id">{{ $page.props.auth.user.email }}</span>!</p>
            </b-card-text>
          </b-card>
      </div>
    </div>
  </layout>
</template>

<script>
    import Layout from '../Components/Layout.Vue'
    export default {
        components: { 
            'layout': Layout,
        },
    }
</script>
