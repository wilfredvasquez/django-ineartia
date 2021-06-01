<template>
    <div>
        <header>
            <nav-bar :note="note">
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
            note: {
                type: Object,
                default: () => {}
            }
        },
    }
</script>

