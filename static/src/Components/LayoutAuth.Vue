<template>
    <div>
        <header>
            <b-navbar variant="dark" type="light">
                <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

                <b-navbar-brand tag="h1" href="#">
                    <span class="text-white pl-10">{{ title }}</span>
                </b-navbar-brand>
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