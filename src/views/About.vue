<template>
    <div id="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
    import { page } from 'vue-analytics';
    export default {
        name: 'about',
        methods: {
            track() {
                page('/about');
            }
        }
    }
</script>
