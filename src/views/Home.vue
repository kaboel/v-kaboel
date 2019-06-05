<template>
    <div id="home">
        <Header />
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img src="../assets/glasses.png" width="250" class="mb-lg">
                    <h1 class="title is-3 has-text-centered mb-lg mt-lg">
                        A Code Junkie, Web Designer and Full Stack Developer
                    </h1>
                    <h1 class="subtitle is-4 has-text-centered titillium mt-lg">
                        I make things happen with
                        <b-tooltip
                                label="Codes"
                                type="is-dark" animated>
                            <font-awesome-icon :icon="['fas', 'code']" class="has-text-black" data-tooltip="Codes"></font-awesome-icon>,
                        </b-tooltip>
                        for the
                        <b-tooltip
                                label="Web"
                                type="is-dark"
                                position="is-bottom" animated>
                            <font-awesome-icon :icon="['fas', 'globe']" class="has-text-black"></font-awesome-icon>,
                        </b-tooltip>
                        and God I
                        <b-tooltip
                                label="Love"
                                type="is-dark" animated>
                            <font-awesome-icon :icon="['fas', 'heart']" class="has-text-black" title="Love"></font-awesome-icon>
                        </b-tooltip>
                        it !
                    </h1>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/layouts/Header";
    import Footer from "../components/layouts/Footer";
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'home',
        components: {BTooltip, Footer, Header},
    }
</script>

<style scoped>
    .titillium {
        font-family: "Titillium Web", sans-serif;
        letter-spacing: 2px;
    }
</style>
