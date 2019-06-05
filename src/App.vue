<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Dosis:800|Titillium+Web&display=swap');

    html, body {
        font-family: 'Titillium Web', sans-serif;
    }

    /* Margins */
    .m-sm {
        margin: 0.5rem !important;
    }

    .ml-sm {
        margin-left: 0.5rem !important;
    }

    .mr-sm {
        margin-right: 0.5rem !important;
    }

    .mt-sm {
        margin-top: 0.5rem !important;
    }

    .mb-sm {
        margin-bottom: 0.5rem !important;
    }

    .m-md {
        margin: 1rem !important;
    }

    .ml-md {
        margin-left: 1rem !important;
    }

    .mr-md {
        margin-right: 1rem !important;
    }

    .mt-md {
        margin-top: 1rem !important;
    }

    .mb-md {
        margin-bottom: 1rem !important;
    }

    .m-lg {
        margin: 2rem !important;
    }

    .ml-lg {
        margin-left: 2rem !important;
    }

    .mr-lg {
        margin-right: 2rem !important;
    }

    .mt-lg {
        margin-top: 2rem !important;
    }

    .mb-lg {
        margin-bottom: 2rem !important;
    }

    /* Padding */
    .p-sm {
        padding: 0.5rem !important;
    }

    .pl-sm {
        padding-left: 0.5rem !important;
    }

    .pr-sm {
        padding-right: 0.5rem !important;
    }

    .pt-sm {
        padding-top: 0.5rem !important;
    }

    .pb-sm {
        padding-bottom: 0.5rem !important;
    }

    .p-md {
        padding: 1rem !important;
    }

    .pl-md {
        padding-left: 1rem !important;
    }

    .pr-md {
        padding-right: 1rem !important;
    }

    .pt-md {
        padding-top: 1rem !important;
    }

    .pb-md {
        padding-bottom: 1rem !important;
    }

    .p-lg {
        padding: 2rem !important;
    }

    .pl-lg {
        padding-left: 2rem !important;
    }

    .pr-lg {
        padding-right: 2rem !important;
    }

    .pt-lg {
        padding-top: 2rem !important;
    }

    .pb-lg {
        padding-bottom: 2rem !important;
    }
</style>
