<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#" class="ms-5">
                <inertia-link class="text-white nav-link" :href="route('app:index')">Demo</inertia-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <template v-if="$page.props.auth.user.id">
                    <b-navbar-nav>
                        <b-nav-item href="#">
                            <inertia-link class="nav-link" :href="route('app:notes')">Notes</inertia-link>
                        </b-nav-item>
                    </b-navbar-nav>
                </template>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ms-auto me-5" >
                    <template v-if="!$page.props.auth.user.id">
                        <b-nav-item>
                            <inertia-link class="text-white nav-link" :href="route('authentication:login')">Login</inertia-link>
                        </b-nav-item>
                        <b-nav-item>
                            <inertia-link class="text-white nav-link" :href="route('authentication:register')">Register</inertia-link>
                        </b-nav-item>
                    </template>
                    <template v-else>
                        <b-nav-item-dropdown left>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em>{{ $page.props.auth.user.email }}</em>
                            </template>
                            <b-dropdown-item>
                                <inertia-link class="dropdown-item" :href="route('authentication:logout')">Logout</inertia-link>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </template>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Header",
    };
</script>