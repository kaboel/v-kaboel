<template>
    <div id="not-found">
        <div class="container">
            <div class="columns">
                <div class="column is-8-desktop is-offset-2-desktop mt-lg">
                    <div class="hero">
                        <div class="hero-body has-text-centered has-text-black pt-sm ">
                            <h1 class="title is-xl watermark">404</h1>
                            <img src="../assets/KS-logo-black.png" width="400" class="watermark">
                            <hr>
                            <h1 class="subtitle is-3 mt-lg">
                                I don't think this is the page you looking for.
                            <br>
                                Let's get you back on track !
                            </h1>
                            <router-link class="button is-black is-outlined is-rounded"
                                         to="/">
                                <strong>Click me !</strong>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '404'
    }
</script>

<style scoped>
    .is-xl {
        font-size: 12rem;
    }
    .title {
        font-style: italic;
        letter-spacing: 1rem;
    }
    .title,  hr {
        margin: 0 !important;
    }
    .watermark{
        filter:opacity(15%);
        margin-top: -1rem;
    }
</style>
