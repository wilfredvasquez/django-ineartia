<template>
    <div>
        <header>
            {{ note }}
        </header>

        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
    // import NavBar from '../Share/NavBar.vue'

    export default {
        name: 'Layout',
        //components: { 
         //   'nav-bar': NavBar
        //},
        props: {
            note: {
                type: Object,
                default: () => {}
            }
        },
    }
</script>

