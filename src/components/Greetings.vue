<template>
    <section id="greetings" class="hero">
        <div class="hero-body pl-lg pr-lg" style="padding-top: 0">
            <div class="container has-text-centered">
                <img src="../assets/glasses.png">
                <h1 class="title is-3 has-text-centered mb-lg mt-xl">
                    A Code Junkie, and Full Stack Web Developer
                </h1>
                <h2 class="subtitle is-4 has-text-centered titillium mt-lg">
                    I make things happen with
                    <b-tooltip
                            label="Codes"
                            type="is-dark"
                            position="is-bottom"
                            always>
                        <font-awesome-icon
                                :icon="['fas', 'code']"
                                class="has-text-primary"
                                data-tooltip="Codes">
                        </font-awesome-icon>,
                    </b-tooltip>
                    for the
                    <b-tooltip
                            label="Web"
                            type="is-dark"
                            position="is-bottom"
                            always>
                        <font-awesome-icon
                                :icon="['fas', 'globe']"
                                class="has-text-grey">
                        </font-awesome-icon>,
                    </b-tooltip>
                    and God I
                    <b-tooltip
                            label="Love"
                            type="is-dark"
                            position="is-bottom"
                            always>
                        <font-awesome-icon
                                :icon="['fas', 'heart']"
                                class="has-text-danger">
                        </font-awesome-icon>
                    </b-tooltip>
                    it!
                </h2>
            </div>
        </div>
        <div class="has-text-centered mt-xl">
            <img src="../assets/programmer.png" style="margin-bottom: -.5rem;">
        </div>
    </section>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'greetings',
        components: {
            BTooltip
        }
    }
</script>
