<template>
    <div>
        <b-navbar variant="dark" type="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand tag="h1" href="#">
                <span class="text-white pl-10">Notas</span>
                <span class="text-white pl-10" v-if="note">ID: {{ note.id }}</span>
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    note: {
        type: Object,
        default: () => {}
    }
  },
};
</script>

<style scoped>
    .pl-10 {
        padding-left: 1em;
    }
</style>
