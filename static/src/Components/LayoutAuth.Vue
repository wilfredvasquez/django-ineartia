<template>
    <div>
        <header>
            <b-navbar variant="dark" type="light">
                <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

                <b-navbar-brand tag="h1" href="#">
                    <span class="text-white pl-10">{{ title }}</span>
                </b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav>
                        <b-nav-item>
                            <inertia-link class="text-white" :href="route('authentication:login')">Login</inertia-link>
                        </b-nav-item>
                        <b-nav-item>
                            <inertia-link class="text-white" :href="route('authentication:register')">Register</inertia-link>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </header>

        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
    import Header from '../Share/Header.Vue'

    export default {
        name: 'Layout',
        components: { 
            'nav-bar': Header
        },
        props: {
            title: {
                type: String,
                default: () => ""
            }
        },
    }
</script>