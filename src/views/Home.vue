<template>
    <div id="home">
        <Header />
        <section class="container has-text-centered mt-lg">
            <img src="../assets/glasses.png" width="250">
            <h1 class="title is-3 has-text-centered mb-lg mt-xl">
                A Code Junkie, Web Designer and Full Stack Web Developer
            </h1>
            <h1 class="subtitle is-4 has-text-centered titillium mt-lg">
                I make things happen with
                <b-tooltip
                        label="Codes"
                        type="is-dark"
                        position="is-bottom"
                        always>
                    <font-awesome-icon :icon="['fas', 'code']" class="has-text-black" data-tooltip="Codes"></font-awesome-icon>,
                </b-tooltip>
                for the
                <b-tooltip
                        label="Web"
                        type="is-dark"
                        position="is-bottom"
                        always>
                    <font-awesome-icon :icon="['fas', 'globe']" class="has-text-black"></font-awesome-icon>,
                </b-tooltip>
                and God I
                <b-tooltip
                        label="Love"
                        type="is-dark"
                        position="is-bottom"
                        always>
                    <font-awesome-icon :icon="['fas', 'heart']" class="has-text-black"></font-awesome-icon>
                </b-tooltip>
                it!
            </h1>
        </section>
        <div class="has-text-centered mt-xl">
            <img src="../assets/programmer.png" width="1000" style="margin-bottom: -10px;">
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/layouts/Header";
    import Footer from "../components/layouts/Footer";
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'home',
        components: {BTooltip, Footer, Header}
    }
</script>

<style scoped>
    .titillium {
        font-family: "Titillium Web", sans-serif;
        letter-spacing: 2px;
    }
</style>
