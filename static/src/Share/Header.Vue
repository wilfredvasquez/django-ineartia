<template>
    <div>
        <b-navbar variant="dark" type="dark">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand tag="h1" href="#">
                <span class="text-white pl-10">Notas</span>
                <span class="text-white pl-10" v-if="note">ID: {{ note.id }}</span>
            </b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown class="text-white" right>
                    <!-- Using 'button-content' slot -->
                        <template #button-content class="text-white">
                            <em>{{ $page.props.auth.user.email }}</em>
                        </template>
                        <b-dropdown-item>
                            <inertia-link :href="route('authentication:logout')">Logout</inertia-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
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
