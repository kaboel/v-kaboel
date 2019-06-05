<template>
    <div id="project">
        <h1>This is the project page</h1>
    </div>
</template>

<script>
    import { page } from 'vue-analytics';
    export default {
        name: 'project',
        methods: {
            track() {
                page('/project');
            }
        }
    }
</script>
